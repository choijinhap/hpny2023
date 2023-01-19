import request from '.';
import { Post } from 'src/@types/post';
export const getAllPosts = () => request('GET', '/posts');
export const postPost = ({ title, content, image }: Partial<Post>) =>
	request('POST', '/post', { title, content, image });
export const getPostDetail = (postId: string) => request('GET', `/post/${postId}`);
export const deletePost = (postId: string) => request('DELETE', `/post/${postId}`);
export const patchPost = (postId: string, { title, content }: Partial<Post>) =>
	request('PATCH', `/post/${postId}`, { title, content });
export const deleteComment = (commentId: string) => request('DELETE', `/comment/${commentId}`);
export const postComment = (postId: string, content: string) =>
	request('POST', `/comment/${postId}`, { content });
