import Component from 'src/lib/Component';
import './post.scss';
type State = {
	image: string;
	title: string;
	content: string;
};
class Post extends Component<State, null> {
	setup(): void {
		this.state = {
			image: '',
			title: '',
			content: '',
		};
	}
	template() {
		return `
      <div class="Post">
        <button class="create-post-btn active">
          랜덤 이미지 추가하기
        </button>
        <input class="title" type="text" value="${this.state.title}"/>
        <input class="content" type="text" value="${this.state.content}"/>
        <button class="create-post-btn">
          글 작성하기
        </button>
      </div>
    `;
	}
	setEvent(): void {
		this.addEvent('change', '.title', (e) => {
			const target = e.target as HTMLInputElement;
			this.setState({ title: target.value });
		});
		this.addEvent('change', '.content', (e) => {
			const target = e.target as HTMLInputElement;
			this.setState({ content: target.value });
		});
	}
}
export default Post;
