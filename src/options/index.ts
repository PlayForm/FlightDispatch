export type optionDebug = 0 | 1 | 2;

export interface paths {
	fulfilled?:
		| boolean
		| ((pipe: optionCommandsDispatch) => Promise<false | string>);

	failed?:
		| boolean
		| ((inputPath: optionCommandsFlight) => Promise<false | string>);

	accomplished?:
		| boolean
		| ((current: optionCommandsFlight) => Promise<false | string>);

	changed?: (pipe: optionCommandsDispatch) => Promise<optionCommandsDispatch>;

	passed?: (current: optionCommandsFlight) => Promise<boolean>;

	read?: (current: optionCommandsFlight) => Promise<optionBuffer>;

	wrote?: (current: optionCommandsFlight) => Promise<optionBuffer>;
}


export interface Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	path?: optionPath | optionPath[] | Set<optionPath>;

	exclude?: optionExclude | optionExclude[] | Set<optionExclude>;

	files?: Pattern | Pattern[];

	type?: string;

	dispatch?: commands;

	logger?: optionDebug;
}

export default {

	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 2,s
} satisfies Options;
