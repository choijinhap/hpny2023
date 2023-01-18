class Component<T, K> {
	parentEl: Element;
	state: T;
	props: K;
	constructor({ parentEl, props }: { parentEl: Element; props: K }) {
		this.parentEl = parentEl;
		this.props = props;
		this.setup();
		this.render();
		this.onMounted();
	}
	setup() {}
	template() {
		return ``;
	}
	render() {
		this.parentEl.innerHTML = this.template();
		this.setEvent();
		this.update();
	}
	unMount() {
		this.parentEl.remove();
	}
	setEvent() {}
	setState(newState: Partial<T>) {
		this.state = { ...this.state, ...newState };
		this.render();
	}
	addEvent(eventType: string, selector: string, callback: (event: Event) => void) {
		const component = this.parentEl.children[0];
		const children = [...this.parentEl.querySelectorAll(selector)];
		const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
		component.addEventListener(eventType, (event) => {
			if (!isTarget(event.target as Element)) return false;
			callback(event);
			if (eventType === 'input') {
				this.autoFocus(selector);
			}
		});
	}
	onMounted() {}
	update() {}
	autoFocus(selector: string) {
		const el = this.parentEl.querySelector(selector) as HTMLInputElement;
		el.focus();
		el.setSelectionRange(el.value.length, el.value.length);
	}
}
export default Component;
