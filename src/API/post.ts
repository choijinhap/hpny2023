import server from '.';
import { Post } from 'src/@types/post';
export const getAllPosts = () => server.get('/posts');
export const postPost = ({ title, content, image }: Partial<Post>) =>
	server.post('/post', { title, content, image });
export const getPostDetail = (postId: string) => server.get(`/post/${postId}`);
export const deletePost = (postId: string) => server.delete(`/post/${postId}`);
export const patchPost = (postId: string, { title, content }: Partial<Post>) =>
	server.patch(`/post/${postId}`, { title, content });
