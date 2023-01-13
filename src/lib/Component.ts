class Component<T, K> {
	parentEl: Element;
	wrapper: Element;
	state: T;
	props: K;
	constructor({ parentEl, props }: { parentEl: Element; props: K }) {
		this.parentEl = parentEl;
		this.props = props;
		this.wrapper = document.createElement('div');
		this.setup();
		this.render();
		this.setEvent();
		this.onMounted();
	}
	setup() {}
	template() {
		return ``;
	}
	render() {
		this.wrapper.innerHTML = this.template();
		this.parentEl.innerHTML = '';
		this.parentEl.appendChild(this.wrapper);
		this.update();
	}
	setEvent() {}
	setState(newState: Partial<T>) {
		this.state = { ...this.state, ...newState };
		this.render();
	}
	addEvent(eventType: string, selector: string, callback: (event: Event) => void) {
		const children = [...this.wrapper.querySelectorAll(selector)];
		const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
		this.wrapper.addEventListener(eventType, (event) => {
			if (!isTarget(event.target as Element)) return false;
			callback(event);
		});
	}
	onMounted() {}
	update() {}
}
export default Component;
