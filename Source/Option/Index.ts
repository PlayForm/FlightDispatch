export type optionDebug = 0 | 1 | 2;

export type optionInfo = string;

export default interface commands {
	Fulfilled?:
		| boolean
		| ((plan: optionCommandsPlan) => Promise<false | string>);

	Failed?:
		| boolean
		| ((inputPath: optionCommandsFlight) => Promise<false | string>);

	Accomplished?:
		| boolean
		| ((ongoing: optionCommandsFlight) => Promise<false | string>);

	changed?: (plan: optionCommandsPlan) => Promise<optionCommandsPlan>;

	passed?: (ongoing: optionCommandsFlight) => Promise<Boolean>;
}

export type optionExclude = string | RegExp | ((file: string) => boolean);

export type optionPath = string | URL | Map<string | URL, string | URL> | false;

export default interface Type {
	[key: string]: any;

	path?: optionPath | optionPath[] | Set<optionPath>;

	exclude?: optionExclude | optionExclude[] | Set<optionExclude>;

	dispatch?: commands;

	logger?: optionDebug;
}

export default interface optionCommandsPlan {
	debug: optionDebug;

	flights: number;

	info: any;

	results: Map<string, string>;

	ongoing: optionCommandsFlight;
}

export default interface optionCommandsFlight {
	destination: optionInfo;
}

export default {
	Logger: 2,
	dispatch: {
		passed: async () => true,
		changed: async (plan) => plan,
	},
} satisfies Type;
