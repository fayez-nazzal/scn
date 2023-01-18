/**
 * # Simple classnames
 * ## Example
 * ### Input:
 * scn("text-sm", ["text-error", isError], ["text-success", !isError])
 * ### Output:
 * "text-sm text-success"
 */
export = (...cn: ([string, any] | any)[]) =>
  cn
    .filter((x) => x?.[1])
    .map((x) => ((x as Array<any>).pop ? x[0] : x))
    .join(' ');
