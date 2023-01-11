import Component from '../Component';
type State = {
	items: string[];
};
class Page1 extends Component<State> {
	setup() {
		this.state = { items: ['item1', 'item2'] };
	}
	setEvent() {
		this.addEvent('click', '.addBtn', () => {
			const { items } = this.state;
			this.setState({ items: [...items, `item${items.length + 1}`] });
		});
		this.addEvent('click', '.deleteBtn', (e) => {
			const target = e.target as HTMLElement;
			const items = [...this.state.items];
			items.splice(Number(target.dataset.index), 1);
			this.setState({ items });
		});
	}
	template() {
		const { items } = this.state;
		return `
    <ul>
    ${items
			.map(
				(item, key) => `
      <li>
        ${item}
        <button class="deleteBtn" data-index="${key}">삭제</button>
      </li>
    `
			)
			.join('')}
  </ul>
  <button class="addBtn">추가</button>
    `;
	}
}
export default Page1;
