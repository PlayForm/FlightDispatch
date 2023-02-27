import type { optionCommandsPlan } from "../options/index.js";

export default class flights {
	plan: optionCommandsPlan = {
		// rome-ignore lint/nursery/noPrecisionLoss:
		flights: 0,
		// rome-ignore lint/nursery/noPrecisionLoss:
		debug: 2,
		info: {},
		results: new Map(),
		ongoing: {
			destination: "",
		},
	};

	// rome-ignore lint/nursery/noPrecisionLoss:
	constructor(debug: optionCommandsPlan["debug"] = 2) {
		this.plan.debug = debug;
	}
}
