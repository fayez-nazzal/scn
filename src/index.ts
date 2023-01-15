/**
 * # Simple classnames
 * ## Example
 * ### Input:
 * scn("text-sm", ["text-red", !!error], ["text-green", !error])
 * ### Output:
 * "text-sm text-red text-green"
 */
const scn = (...cn: ([string, boolean] | string)[]) =>
  cn
    .filter((x) => x[1] != false)
    .map((x) => (typeof x == 'string' ? x : x[0]))
    .join(' ');

export = scn;
