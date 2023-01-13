import axios from 'axios';
const ACCESS_KEY = 'TcJL8d3h7uDsisnCxr9gSJo_kPHi7EV7b3aJEKvrWeU';
const SECRET_KEY = '9bKZYc1RVRbmikAPgTafb9dEjUpWbK9QkQZ7SRprkd4';
const unsplash = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: `Client-ID ${ACCESS_KEY}`,
	},
});

export const getPhoto = () => unsplash.get('/photos/random');
