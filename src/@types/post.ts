export type Post = {
	content: string;
	createdAt: string;
	image: string;
	postId: string;
	title: string;
	updatedAt: string;
};

export type Comment = {
	commentId: string;
	postId: string;
	content: string;
};
