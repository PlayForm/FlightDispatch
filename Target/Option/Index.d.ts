/// <reference types="node" />
export type optionDebug = 0 | 1 | 2;
export type optionInfo = string;
export interface Command {
    Fulfilled?: boolean | ((plan: optionCommandsPlan) => Promise<false | string>);
    Failed?: boolean | ((inputPath: optionCommandsFlight) => Promise<false | string>);
    Accomplished?: boolean | ((ongoing: optionCommandsFlight) => Promise<false | string>);
    changed?: (plan: optionCommandsPlan) => Promise<optionCommandsPlan>;
    passed?: (ongoing: optionCommandsFlight) => Promise<boolean>;
}
export type optionExclude = string | RegExp | ((file: string) => boolean);
export type optionPath = string | URL | Map<string | URL, string | URL> | false;
export interface Interface {
    path?: optionPath | optionPath[] | Set<optionPath>;
    exclude?: optionExclude | optionExclude[] | Set<optionExclude>;
    dispatch?: Command;
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
declare const _default: {
    Logger: number;
    dispatch: {
        passed: () => Promise<true>;
        changed: (plan: optionCommandsPlan) => Promise<optionCommandsPlan>;
    };
};
export default _default;
