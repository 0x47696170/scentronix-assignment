import { SERVER_LISTS } from "../constants/app.constant";
import apiService from "../shared/services/api.service";

const findServer = async () => {
	const connectToServerPromise = SERVER_LISTS.map((server) =>
		apiService
			.get(server.url, { timeout: 5000 })
			.then((response) => {
				const { status } = response;
				if (status >= 200 && status < 300) {
					return server;
				}
				return null;
			})
			.catch(() => null)
	);

	const servers = await Promise.all(connectToServerPromise);

	const availableServers = servers.filter((server) => server !== null);


	if (!availableServers?.length) {
		throw new Error("No servers are online");
	}	

	const lowestPriorityAvailableServer = availableServers.reduce((prev, current) =>
		prev!.priority < current!.priority ? prev : current
	);	

	return lowestPriorityAvailableServer;
};

export default {
	findServer,
};
