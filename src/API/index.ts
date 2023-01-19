import axios from 'axios';

export const server = axios.create({
	baseURL: `http://43.201.103.199/`,
});

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
const request = async <REQ = unknown, PARAMS = null>(
	method: Method,
	url: string,
	body?: REQ,
	params?: PARAMS
) => {
	const response = await server({ method, url, params, data: body });
	return response;
};

export default request;
