/**
 * # Simple classnames
 * ## Example
 * ### Input:
 * scn("text-sm", ["text-error", isError], ["text-success", !isError])
 * ### Output:
 * "text-sm text-success"
 */
const scn = (...cn: ([string, boolean] | string)[]) =>
  cn
    .filter((x) => x[1] != false)
    .map((x) => (typeof x == 'string' ? x : x[0]))
    .join(' ');

export = scn;
