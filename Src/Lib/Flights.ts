import type { optionCommandsPlan } from "../options/Index.js";

export default class flights {
	plan: optionCommandsPlan = {
		flights: 0,
		debug: 2,
		info: {},
		results: new Map(),
		ongoing: {
			destination: "",
		},
	};

	constructor(debug: optionCommandsPlan["debug"] = 2) {
		this.plan.debug = debug;
	}
}
