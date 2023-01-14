import { navigate } from 'src/lib/Router';
import { Comment as CommentType } from 'src/@types/post';
import { deleteComment } from 'src/API/post';
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
	setEvent(): void {
		this.addEvent('click', '.post-comment-delete-btn', this.onDeleteComment.bind(this));
	}

	async onDeleteComment() {
		const res = await deleteComment(this.props.comment.commentId);
		if (res.data.code === 200) this.unMount();
	}
}
export default Comment;
