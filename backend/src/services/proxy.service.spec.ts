import { expect, test } from "@jest/globals";

import proxyService from "./proxy.service";

import server from "../shared/tests/jest.setup";
import { HttpResponse, http } from "msw";

describe("my asynchronous tests", () => {
	test("should return lowest priority server online", async () => {
		const data = await proxyService.findServer();
		expect(data).toEqual({
			url: "https://does-not-work.perfume.new",
			priority: 1,
		});
	});

	test("should throw error when no server online", async () => {
		server.use(
			http.get("https://does-not-work.perfume.new", () => HttpResponse.error()),
			http.get("https://offline.scentronix.com", () => HttpResponse.error())
		);
		const data = proxyService.findServer();
		await expect(data).rejects.toThrow('No servers are online');
	});
});