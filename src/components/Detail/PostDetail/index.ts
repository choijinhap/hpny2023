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
	}

	async deletePostHandler() {
		const res = await deletePost(this.props.post.postId);
		if (res.data.code === 200) {
			navigate('/');
			return;
		}
		alert('삭제중 에러가 발생했습니다.');
	}
}
export default PostDetail;
