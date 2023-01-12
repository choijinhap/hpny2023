import axios from 'axios';

const server = axios.create({
	baseURL: `http://43.201.103.199/`,
});

export default server;
