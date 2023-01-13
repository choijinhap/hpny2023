import { getPhoto } from 'src/API/unsplash';
import Component from 'src/lib/Component';
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
      <div class="Post">
        <button class="create-image-btn active">
          랜덤 이미지 추가하기
        </button>
        <input class="title" type="text" value="${this.state.title}"/>
        <input class="content" type="text" value="${this.state.content}"/>
        <button class="create-post-btn">
          글 작성하기
        </button>
      </div>
    `;
	}
	setEvent(): void {
		this.addEvent('change', '.title', (e) => {
			const target = e.target as HTMLInputElement;
			this.setState({ title: target.value });
		});
		this.addEvent('change', '.content', (e) => {
			const target = e.target as HTMLInputElement;
			this.setState({ content: target.value });
		});
		this.addEvent('click', '.create-image-btn', async () => {
			const res = await getPhoto();
			this.setState({ image: res.data.urls.regular });
			console.log(res);
		});
	}

	update(): void {
		this.checkImage();
	}

	checkImage() {
		if (this.state.image) {
			const imageBtn = document.querySelector('.create-image-btn') as HTMLButtonElement;
			imageBtn.disabled = true;
			imageBtn.classList.remove('active');
		}
	}
}
export default Post;
