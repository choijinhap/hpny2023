import { Post } from 'src/@types/post';
import { deletePost } from 'src/API/post';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import { IsoToDate } from 'src/utils/time';
import './postdetail.scss';

type Props = {
	post: Post;
};

class PostDetail extends Component<null, Props> {
	template(): string {
		const { image, title, createdAt, content } = this.props.post;
		return `
        <div class="post-detail">
            <div class="img-wrapper">
              <img src=${image}></img>
            </div>
            <strong>${title}</strong>
            <small>${IsoToDate(createdAt)}</small>
            <p>${content}</p>
            <div class="post-btn-wrapper">
              <button class="post-modify-btn">수정</button>
              <button class="post-delete-btn">삭제</button>
            </div>
          </div>
      `;
	}
	setEvent(): void {
		this.addEvent('click', '.post-delete-btn', this.deletePostHandler.bind(this));
		this.addEvent('click', '.post-modify-btn', this.modifyPostHandler.bind(this));
	}

	modifyPostHandler() {
		navigate(`/edit/${this.props.post.postId}`);
	}

	deletePostHandler() {
		deletePost(this.props.post.postId)
			.then(() => navigate('/'))
			.catch((err) => {
				alert(err.response.data.message);
			});
	}
}
export default PostDetail;
