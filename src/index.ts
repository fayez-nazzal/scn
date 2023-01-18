/**
 * # Simple classnames
 * ## Example
 * ### Input:
 * scn("text-sm", ["text-error", isError], ["text-success", !isError])
 * ### Output:
 * "text-sm text-success"
 */
export = (...cn: ([any, any] | any)[]) =>
  cn
    .filter((x) => x?.[1] || x?.[1]?.at)
    .map((x) => ((x as Array<any>).pop ? x[0] : x))
    .join(' ');
