import Router from './lib/Router';

interface App {
	target: Element;
}
class App {
	constructor({ target }: App) {
		new Router(target);
	}
}

export default App;
