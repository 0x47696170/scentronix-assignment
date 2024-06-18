import axios from "axios";

const get = async (url: string, config = {}) => {
	return axios
		.get(url, config)
		.then((response) => ({ data: response.data, status: response.status }))
		.catch((err) => {
			throw new Error(err);
		});
};

export default {
	get,
};
