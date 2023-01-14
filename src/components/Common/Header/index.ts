import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './header.scss';

type Props = {
	hasBackBtn: boolean;
	title: string;
};
class Header extends Component<null, Props> {
	template(): string {
		const { hasBackBtn, title } = this.props;
		return `
      <nav class="Header">
        <div class="back-btn-wrapper">
          ${
						hasBackBtn
							? `<a><img src="https://hpny-1.s3.ap-northeast-2.amazonaws.com/icon_chevron_left.svg" id="back-icon"></a>`
							: ``
					}
        </div>
        <a class="header-title">${title}</a>
      </nav>
    `;
	}
	setEvent(): void {
		this.addEvent('click', '.back-btn-wrapper', () => history.back());
		this.addEvent('click', '.header-title', () => navigate('/'));
	}
}

export default Header;
