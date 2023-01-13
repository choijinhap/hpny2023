import { Post } from 'src/@types/post';
import { getPostDetail } from 'src/API/post';
import PostDetail from 'src/components/Detail/PostDetail';
import Component from 'src/lib/Component';
type State = {
	post: Post;
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
		};
	}
	template(): string {
		return `
        <div class="Detail">
          <div data-component="post-detail"></div>
          <hr/>
          <div class="post-comment-list">
            <div class="post-comment">
              <p>댓글입니다</p>
              <button class="post-comment-delete-btn">삭제</button>
            </div>
          </div>
        </div>
    `;
	}
	onMounted(): void {
		const postId = location.pathname.split('/').pop() as string;
		const fetchData = async () => {
			const res = await getPostDetail(postId);
			console.log(res);
			this.setState({ post: res.data.data.post });
		};
		fetchData();
	}
	update(): void {
		const postDetailWrapper = this.wrapper.querySelector(
			'[data-component="post-detail"'
		) as Element;
		new PostDetail({ parentEl: postDetailWrapper, props: { post: this.state.post } });
	}
}
export default Detail;
