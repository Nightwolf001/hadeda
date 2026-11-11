// Metro turns require('./x.png') into a numeric asset id. Declared here so this package
// typechecks on its own; the app gets the same declaration from React Native's types.
declare function require(path: string): number;
