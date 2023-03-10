import { navigate } from 'src/lib/Router';
import { Comment, Post } from 'src/@types/post';
import { getPostDetail } from 'src/API/post';
import Header from 'src/components/Common/Header';
import CommentForm from 'src/components/Detail/CommentForm';
import CommentList from 'src/components/Detail/CommentList';
import PostDetail from 'src/components/Detail/PostDetail';
import Component from 'src/lib/Component';
import './detail.scss';

type State = {
	post: Post;
	comments: Array<Comment>;
};
class Detail extends Component<State, null> {
	setup(): void {
		this.state = {
			post: {
				content: '',
				createdAt: '',
				image: '',
				postId: '',
				title: '',
				updatedAt: '',
			},
			comments: [],
		};
	}
	template(): string {
		return `
		<div>
			<div data-component="header"></div>
			<div class="Detail">
				<div data-component="post-detail"></div>
				<hr/>
				<div data-component="post-comment-list"></div>
				<div data-component="comment-form"></div>
			</div>
		</div>
    `;
	}
	onMounted(): void {
		this.fetchPostDetail();
	}
	update(): void {
		const postDetailWrapper = this.parentEl.querySelector(
			'[data-component="post-detail"'
		) as Element;
		new PostDetail({ parentEl: postDetailWrapper, props: { post: this.state.post } });
		const header = this.parentEl.querySelector('[data-component="header"') as Element;
		new Header({ parentEl: header, props: { hasBackBtn: true, title: 'HPNY 2023' } });
		const commentListComponent = this.parentEl.querySelector(
			'[data-component="post-comment-list"'
		) as Element;
		new CommentList({ parentEl: commentListComponent, props: { comments: this.state.comments } });
		const commentFormComponent = this.parentEl.querySelector(
			'[data-component="comment-form"'
		) as Element;
		new CommentForm({ parentEl: commentFormComponent, props: { postId: this.state.post.postId } });
	}

	fetchPostDetail() {
		const postId = location.pathname.split('/').pop() as string;
		getPostDetail(postId)
			.then((res) => {
				this.setState({ post: res.data.data.post, comments: res.data.data.comments });
			})
			.catch(() => {
				alert('????????? ???????????????.');
				navigate('/');
			});
	}
}
export default Detail;
