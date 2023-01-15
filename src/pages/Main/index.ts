import Header from 'src/components/Common/Header';
import Postlist from 'src/components/Main/Postlist/Postlist';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './main.scss';

class Main extends Component<null, null> {
	template() {
		return `
		<div>
			<div data-component="header"></div>
      <div class="Main">
				<div class="create-post-btn-wrap">
					<button class="create-post-btn">
						새 글 작성하기
					</button>
				</div>
        <div data-component="post-list">
        </div>
      </div>
		</div>
    `;
	}
	setEvent(): void {
		this.addEvent('click', '.create-post-btn', () => {
			navigate('/post');
		});
	}
	update(): void {
		const postListWrapper = this.parentEl.querySelector('[data-component="post-list"') as Element;
		new Postlist({ parentEl: postListWrapper, props: null });
		const header = this.parentEl.querySelector('[data-component="header"') as Element;
		new Header({ parentEl: header, props: { hasBackBtn: false, title: 'HPNY 2023' } });
	}
}
export default Main;
