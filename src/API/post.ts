import server from '.';
import { Post } from 'src/@types/Post';
export const getAllPosts = () => server.get('/posts');
export const postPost = ({ title, content, image }: Partial<Post>) =>
	server.post('/post', { title, content, image });
