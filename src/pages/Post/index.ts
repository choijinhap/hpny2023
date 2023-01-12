import Component from 'src/lib/Component';
import './post.scss';

class Post extends Component<null, null> {
	template() {
		return `
      <div class="Post">
        <button class="create-post-btn active">
          랜덤 이미지 추가하기
        </button>
        <input class="title" type="text"/>
        <input class="content" type="text"/>
        <button class="create-post-btn">
          글 작성하기
        </button>
      </div>
    `;
	}
}
export default Post;
