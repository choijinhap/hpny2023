import { Post } from 'src/@types/post';
import { getPostDetail, patchPost } from 'src/API/post';
import Header from 'src/components/Common/Header';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';

type State = Post;
class Edit extends Component<State, null> {
	setup(): void {
		this.state = {
			content: '',
			createdAt: '',
			image: '',
			postId: '',
			title: '',
			updatedAt: '',
		};
	}
	template(): string {
		const { image, title, content } = this.state;
		return `
      <div data-component="header"></div>
      <div class="Edit">
        <img src="${image}"/>
        <input class="title" type="text" value="${title}"/>
        <input class="content" type="text" value="${content}"/>
        <button class="edit-btn">
          글 수정하기
        </button>
      </div>
    `;
	}
	onMounted(): void {
		const postId = location.pathname.split('/').pop() as string;
		const fetchData = async () => {
			const res = await getPostDetail(postId);
			this.setState(res.data.data.post);
		};
		fetchData();
	}

	setEvent(): void {
		this.addEvent('change', '.title', this.onTitleChange.bind(this));
		this.addEvent('change', '.content', this.onContentChange.bind(this));
		this.addEvent('click', '.edit-btn', this.onEditPost.bind(this));
	}

	update(): void {
		const header = this.wrapper.querySelector('[data-component="header"') as Element;
		new Header({ parentEl: header, props: { hasBackBtn: true, title: 'HPNY 2023' } });
	}

	onTitleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		this.setState({ title: target.value });
	}
	onContentChange(e: Event) {
		const target = e.target as HTMLInputElement;
		this.setState({ content: target.value });
	}
	async onEditPost() {
		const { title, content } = this.state;
		const res = await patchPost(this.state.postId, { title, content });
		if (res.data.code === 200) navigate('/');
	}
}
export default Edit;
