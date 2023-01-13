import { Post } from 'src/@types/post';
import Component from 'src/lib/Component';
import { IsoToDate } from 'src/utils/time';
import './postdetail.scss';

type Props = {
	post: Post;
};

class PostDetail extends Component<null, Props> {
	template(): string {
		console.log(this.props.post);
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
              <button class="post-modify=btn">수정</button>
              <button class="post-delete-btn">삭제</button>
            </div>
          </div>
      `;
	}
}
export default PostDetail;
