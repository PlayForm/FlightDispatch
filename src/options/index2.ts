export type optionDebug = 0 | 1 | 2;

export type optionInfo = string;

export interface commands {
	fulfilled?:
		| boolean
		| ((plan: optionCommandsPlan) => Promise<false | string>);

	failed?:
		| boolean
		| ((inputPath: optionCommandsFlight) => Promise<false | string>);

	accomplished?:
		| boolean
		| ((ongoing: optionCommandsFlight) => Promise<false | string>);

	changed?: (plan: optionCommandsPlan) => Promise<optionCommandsPlan>;

	passed?: (ongoing: optionCommandsFlight) => Promise<boolean>;
}

export type optionExclude = string | RegExp | ((file: string) => boolean);

export type optionPath = string | URL | Map<string | URL, string | URL> | false;

export interface Options {
	[key: string]: any;

	path?: optionPath | optionPath[] | Set<optionPath>;

	exclude?: optionExclude | optionExclude[] | Set<optionExclude>;

	dispatch?: commands;

	logger?: optionDebug;
}

export interface optionCommandsPlan {
	debug: optionDebug;

	flights: number;

	info: any;

	results: Map<string, string>;

	ongoing: optionCommandsFlight;
}

export interface optionCommandsFlight {
	destination: optionInfo;
}

export default {
	logger: 2,
	dispatch: {
		passed: async () => true,
		changed: async (plan) => plan,
	},
} satisfies Options;
