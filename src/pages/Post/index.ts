import { postPost } from 'src/API/post';
import { getPhoto } from 'src/API/unsplash';
import Header from 'src/components/Common/Header';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './post.scss';
type State = {
	image: string;
	title: string;
	content: string;
};
class Post extends Component<State, null> {
	setup(): void {
		this.state = {
			image: '',
			title: '',
			content: '',
		};
	}
	template() {
		return `
		<div>
			<div data-component="header"></div>
      <div class="Post">
        <button class="create-image-btn active">
          랜덤 이미지 추가하기
        </button>
        <input class="title" type="text" value="${this.state.title}"/>
        <textarea class="content" type="text" maxlength="500">${this.state.content}</textarea>
        <button class="post-btn">
          글 작성하기
        </button>
      </div>
		</div>
    `;
	}
	setEvent(): void {
		this.addEvent('input', '.title', this.onTitleChange.bind(this));
		this.addEvent('input', '.content', this.onContentChange.bind(this));
		this.addEvent('click', '.create-image-btn', this.createImageHandler.bind(this));
		this.addEvent('click', '.post-btn', this.postHandler.bind(this));
	}

	update(): void {
		this.checkImage();
		this.checkPost();
		const header = this.parentEl.querySelector('[data-component="header"') as Element;
		new Header({ parentEl: header, props: { hasBackBtn: true, title: 'HPNY 2023' } });
	}

	onTitleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		this.setState({ title: target.value });
		this.autoFocus('.title', this.state.title.length);
	}
	onContentChange(e: Event) {
		const target = e.target as HTMLInputElement;
		this.setState({ content: target.value });
		this.autoFocus('.content', this.state.content.length);
	}

	async createImageHandler() {
		const res = await getPhoto();
		this.setState({ image: res.data.urls.regular });
	}

	async postHandler() {
		const { title, content, image } = this.state;
		const res = await postPost({ title, content, image });
		if (res.data.code === 201) navigate('/');
	}

	checkImage() {
		const imageBtn = document.querySelector('.create-image-btn') as HTMLButtonElement;
		if (this.state.image) {
			imageBtn.disabled = true;
			imageBtn.classList.remove('active');
		} else {
			imageBtn.disabled = false;
			imageBtn.classList.add('active');
		}
	}

	checkPost() {
		const postBtn = document.querySelector('.post-btn') as HTMLButtonElement;
		if (this.state.image && this.state.content && this.state.title) {
			postBtn.disabled = false;
			postBtn.classList.add('active');
		} else {
			postBtn.disabled = true;
			postBtn.classList.remove('active');
		}
	}
}
export default Post;
