import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './main.scss';

class Main extends Component<null> {
	template() {
		return `
      <div class="Main">
        <button class="create-post-btn">
          새 글 작성하기
        </button>
        <div class="post-list">
          <div class="post-item">
            <div class="img-wrap">
              <img src="https://source.unsplash.com/random/360×360"/>
            </div>
            <div class="description">
              <strong>신년 계획</strong>
              <p>다들 신년 계획 세우셨나요?</p>
            </div>
          </div>
          <div class="post-item">
            <div class="img-wrap">
              <img src="https://source.unsplash.com/random/360×360"/>
            </div>
            <div class="description">
              <strong>신년 계획</strong>
              <p>다들 신년 계획 세우셨나요?</p>
            </div>
          </div>
        </div>
      </div>
    `;
	}
	setEvent() {
		this.addEvent('click', 'div', () => {
			navigate('/post');
		});
	}
}
export default Main;
