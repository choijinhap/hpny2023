import Component from 'src/lib/Component';
import Comment from '../Comment';
import { Comment as CommentType } from 'src/@types/post';
import './commentlist.scss';

type Props = {
	comments: Array<CommentType>;
};
class CommentList extends Component<null, Props> {
	template(): string {
		const { comments } = this.props;
		return `
      <div class="Comment-list">
      ${comments
				.map(
					(comment, idx) => `
            <div data-component="comment" data-id=${idx}></div>
            `
				)
				.join('')}
      </div>
    `;
	}
	update(): void {
		const commentWrappers = this.wrapper.querySelectorAll('[data-component="comment"');
		commentWrappers.forEach((commentWrapper) => {
			const commentWrapperEl = commentWrapper as HTMLElement;
			new Comment({
				parentEl: commentWrapper,
				props: {
					comment: this.props.comments[Number(commentWrapperEl.dataset.id)],
				},
			});
		});
	}
}
export default CommentList;
