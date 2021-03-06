// Type definitions for strip-json-comments
// Project: https://github.com/sindresorhus/strip-json-comments
// Definitions by: Dylan R. E. Moonfire <https://github.com/dmoonfire/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as stripJsonComments from "strip-json-comments";

const json = '{/*rainbows*/"unicorn":"cake"}';

JSON.parse(stripJsonComments(json));
//=> {unicorn: 'cake'}

stripJsonComments(json, {});
stripJsonComments(json, {
    whitespace: true
});
