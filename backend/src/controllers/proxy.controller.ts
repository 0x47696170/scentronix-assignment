import { Request, Response } from "express";
import { HTTP_RESPONSE } from "../constants/app.constant";

import proxyService from "../services/proxy.service";

const findServer = async (req: Request, res: Response) => {
	try {
		const result = await proxyService.findServer();
		res.json({ data: result });
	} catch (err) {
		console.log(err);
		res
			.status(HTTP_RESPONSE.INTERNAL_SERVER_ERROR.code)
			.json({ error: true, ...HTTP_RESPONSE.INTERNAL_SERVER_ERROR });
	}
};

export default {
	findServer,
};
