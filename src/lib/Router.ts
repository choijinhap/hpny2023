import Detail from 'src/pages/Detail';
import Main from 'src/pages/Main';
import Post from 'src/pages/Post';

const routes = [
	{ path: /^\/$/, element: Main },
	{ path: /^\/post\/?$/, element: Post },
	{ path: /^\/post\/[\w]/, element: Detail },
];

export const navigate = (to: string, isReplace = false) => {
	const historyChangeEvent = new CustomEvent('historychange', {
		detail: {
			to,
			isReplace,
		},
	});

	dispatchEvent(historyChangeEvent);
};

class Router {
	parentEl: Element;
	constructor(parentEl: Element) {
		this.parentEl = parentEl;
		this.init();
		this.route();
	}
	findMatchedRoute() {
		return routes.find((route) => route.path.test(location.pathname));
	}
	route() {
		const matchedRoute = this.findMatchedRoute();
		if (matchedRoute) {
			new matchedRoute.element({ parentEl: this.parentEl, props: null });
		}
	}
	init() {
		window.addEventListener('historychange', (e) => {
			const { detail } = e as CustomEvent;
			const { to, isReplace } = detail;

			if (isReplace || to === location.pathname) history.replaceState(null, '', to);
			else history.pushState(null, '', to);

			this.route();
		});

		window.addEventListener('popstate', () => {
			this.route();
		});
	}
}

export default Router;
