/**
 * # Simple classnames
 * ## Example
 * ### Input:
 * scn("text-sm", ["text-error", isError], ["text-success", !isError])
 * ### Output:
 * "text-sm text-success"
 */
export = (...cn: ([string, boolean | null | undefined] | string)[]) =>
  cn
    .filter((x) => x[1] ?? false)
    .map((x) => (typeof x == 'string' ? x : x[0]))
    .join(' ');
