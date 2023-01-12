interface Constructor {
	parentEl: Element;
}
class Component<T> {
	parentEl: Element;
	wrapper: Element;
	state: T;
	constructor({ parentEl }: Constructor) {
		this.parentEl = parentEl;
		this.wrapper = document.createElement('div');
		this.setup();
		this.render();
		this.setEvent();
	}
	setup() {}
	template() {
		return ``;
	}
	render() {
		this.wrapper.innerHTML = this.template();
		this.parentEl.innerHTML = '';
		this.parentEl.appendChild(this.wrapper);
		this.onMounted();
	}
	setEvent() {}
	setState(newState: T) {
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
}
export default Component;
