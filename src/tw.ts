import scn from 'scn';
import { twMerge } from 'tailwind-merge';

/**
 * # Tailwind classnames
 * ## Example
 * ### Input:
 * scn("text-sm px-2 bg-black", ["px-3", true], ["px-4", false], ["bg-white", true])
 * ### Output:
 * "text-sm bg-black px-3 bg-white"
 */
export const tw = (...args: Parameters<typeof scn>) => {
  return twMerge(scn(...args));
};
