import { Post } from 'src/@types/post';
import Component from 'src/lib/Component';
import { navigate } from 'src/lib/Router';
import './postitem.scss';

type Props = {
	post: Post;
};

class Postitem extends Component<null, Props> {
	template(): string {
		const { postId, image, title, content } = this.props.post;
		return `<div class="post-item" data-id="${postId}">
    <div class="img-wrap">
      <img src="${image}"/>
    </div>
    <div class="description">
      <strong>${title}</strong>
      <p>${content}</p>
    </div>
  </div>`;
	}
	setEvent() {
		this.addEvent('click', '.post-item', (e) => {
			navigate(`/post/${this.props.post.postId}`);
		});
	}
}

export default Postitem;
