import { getAllPosts } from 'src/API/post';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './main.scss';
type Post = {
	content: string;
	createdAt: string;
	image: string;
	postId: string;
	title: string;
	updatedAt: string;
};
type State = {
	posts: Array<Post>;
};
class Main extends Component<State> {
	setup() {
		this.state = {
			posts: [],
		};
	}
	template() {
		return `
      <div class="Main">
        <button class="create-post-btn">
          새 글 작성하기
        </button>
        <div class="post-list">
        ${this.state.posts.map(
					(post) => `<div class="post-item" data-id="${post.postId}">
        <div class="img-wrap">
          <img src="${post.image}"/>
        </div>
        <div class="description">
          <strong>${post.title}</strong>
          <p>${post.content}</p>
        </div>
      </div>`
				)}
        </div>
      </div>
    `;
	}
	setEvent() {
		this.addEvent('click', '.post-item', (e) => {
			const target = e.target as HTMLElement;
			const postItem = target.closest('.post-item') as HTMLElement;
			const postId = postItem.dataset.id;
			navigate(`/post/${postId}`);
		});
	}

	onMounted() {
		const fetchData = async () => {
			const res = await getAllPosts();
			this.setState({ posts: res.data.data.posts });
		};
		fetchData();
	}
}
export default Main;
