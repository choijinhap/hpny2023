import Component from 'src/lib/Component';
import { getAllPosts } from 'src/API/post';
import { navigate } from 'src/lib/Router';
import Postitem from '../Postitem/Postitem';
import { Post } from 'src/@types/post';
import './postlist.scss';

type State = {
	posts: Array<Post>;
};
class Postlist extends Component<State, null> {
	setup() {
		this.state = {
			posts: [],
		};
	}
	template(): string {
		return `
		<div class="post-list">
		${this.state.posts
			.map(
				(post, idx) => `
				<div data-component="post-item" data-id=${idx}></div>
				`
			)
			.join('')}
			</div>
			`;
	}

	onMounted() {
		this.fetchAllPosts();
	}
	update() {
		const postItemWrappers = this.parentEl.querySelectorAll('[data-component="post-item"');
		postItemWrappers.forEach((postItemWrapper) => {
			const postItemWrapperEl = postItemWrapper as HTMLElement;
			new Postitem({
				parentEl: postItemWrapper,
				props: { post: this.state.posts[Number(postItemWrapperEl.dataset.id)] },
			});
		});
	}

	async fetchAllPosts() {
		const res = await getAllPosts();
		this.setState({ posts: res.data.data.posts });
	}
}

export default Postlist;
