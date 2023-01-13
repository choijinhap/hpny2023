import { Post } from 'src/@types/post';
import { getPostDetail } from 'src/API/post';
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
		const { content, updatedAt, image, title } = this.state.post;
		return `
        <div class="Detail">
          <div class="post-detail">
            <div class="img-wrapper">
              <img src=${image}></img>
            </div>
            <strong>${title}</strong>
            <small>${updatedAt}</small>
            <p>${content}</p>
            <div class="post-btn-wrapper">
              <button class="post-modify=btn">수정</button>
              <button class="post-delete-btn">삭제</button>
            </div>
          </div>
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
}
export default Detail;
