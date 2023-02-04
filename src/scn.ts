/**
 * # Simple classnames
 * ## Example
 * ### Input:
 * scn("text-sm", ["text-error", isError], ["text-success", !isError])
 * ### Output:
 * "text-sm text-success"
 */
export = (...cn: ([string, any] | (string | undefined | null | boolean))[]): string =>
  cn
    .filter((x) => (x as any)?.[1])
    .map((x) => ((x as Array<any>).pop ? (x as Array<any>)[0] : x))
    .join(' ');
