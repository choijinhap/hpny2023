import Page1 from './pages/Page1';

interface App {
	target: Element;
}
class App {
	constructor({ target }: App) {
		new Page1({ parentEl: target });
	}
}

export default App;
