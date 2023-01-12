import Postlist from 'src/components/Main/Postlist/Postlist';
import Component from 'src/lib/Component';
import './main.scss';

class Main extends Component<null, null> {
	template() {
		return `
      <div class="Main">
        <button class="create-post-btn">
          새 글 작성하기
        </button>
        <div data-component="post-list">
        </div>
      </div>
    `;
	}
	update(): void {
		const postListWrapper = this.wrapper.querySelector('[data-component="post-list"') as Element;
		new Postlist({ parentEl: postListWrapper, props: null });
	}
}
export default Main;
