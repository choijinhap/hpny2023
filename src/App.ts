import Main from './pages/Main';

interface App {
	target: Element;
}
class App {
	constructor({ target }: App) {
		new Main({ parentEl: target });
	}
}

export default App;
