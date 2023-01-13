import axios from 'axios';

const unsplash = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
	},
});

export const getPhoto = () => unsplash.get('/photos/random');
