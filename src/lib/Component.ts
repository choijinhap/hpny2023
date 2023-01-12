interface Constructor {
	parentEl: Element;
}
class Component<T> {
	parentEl: Element;
	state: T;
	constructor({ parentEl }: Constructor) {
		this.parentEl = parentEl;
		this.setup();
		this.setEvent();
		this.render();
	}
	setup() {}
	template() {
		return ``;
	}
	render() {
		this.parentEl.innerHTML = this.template();
	}
	setEvent() {}
	setState(newState: T) {
		this.state = { ...this.state, ...newState };
		this.render();
	}
	addEvent(eventType: string, selector: string, callback: (event: Event) => void) {
		const children = [...this.parentEl.querySelectorAll(selector)];
		const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
		this.parentEl.addEventListener(eventType, (event) => {
			if (!isTarget(event.target as Element)) return false;
			callback(event);
		});
	}
}
export default Component;
