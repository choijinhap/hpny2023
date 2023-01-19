import { Comment as CommentType } from 'src/@types/post';
import { deleteComment } from 'src/API/post';
import Component from 'src/lib/Component';
import './comment.scss';

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
	setEvent(): void {
		this.addEvent('click', '.post-comment-delete-btn', this.onDeleteComment.bind(this));
	}

	onDeleteComment() {
		deleteComment(this.props.comment.commentId)
			.then(() => this.unMount())
			.catch((err) => alert(err.response.data.message));
	}
}
export default Comment;
