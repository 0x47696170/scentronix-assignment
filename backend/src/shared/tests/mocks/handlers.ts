import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://does-not-work.perfume.new", () =>
		HttpResponse.json({
			success: true,
		})
	),
	http.get("https://does-not-work.perfume.new", () => HttpResponse.error()),
	http.get("https://gitlab.com", () => HttpResponse.error()),
	http.get("http://app.scnt.me", () => {
		throw new HttpResponse(null, { status: 400 });
	}),
	http.get("https://offline.scentronix.com", () =>
		HttpResponse.json({
			success: true,
		})
	),
];
