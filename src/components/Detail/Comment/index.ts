import { Comment as CommentType } from 'src/@types/post';
import Component from 'src/lib/Component';
type Props = {
	comment: CommentType;
};
class Comment extends Component<null, Props> {
	template(): string {
		const { content } = this.props.comment;
		return `
          <div class="Comment">
						<p>${content}</p>
						<button class="post-comment-delete-btn">삭제</button>
					</div>
    `;
	}
}
export default Comment;
