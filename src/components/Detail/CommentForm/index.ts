import { postComment } from 'src/API/post';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './commentform.scss';

type Props = {
	postId: string;
};
type State = {
	content: string;
};
class CommentForm extends Component<State, Props> {
	setup(): void {
		this.state = {
			content: '',
		};
	}
	template(): string {
		return `
      <form class="Comment-form">
        <input class="content" value="${this.state.content}">
        <button type="submit">게시</button>
      </form>
    `;
	}
	setEvent(): void {
		this.addEvent('input', '.content', this.onContentChange.bind(this));
		this.addEvent('submit', '.Comment-form', this.onSubmitHandler.bind(this));
	}

	onContentChange(e: Event) {
		const target = e.target as HTMLInputElement;
		this.setState({ content: target.value });
	}

	onSubmitHandler(e: Event) {
		e.preventDefault();
		if (!this.state.content) {
			alert('댓글을 입력하세요');
			return;
		}
		postComment(this.props.postId, this.state.content)
			.then(() => navigate(`/post/${this.props.postId}`))
			.catch((err) => alert(err.response.data.message));
	}
}
export default CommentForm;
