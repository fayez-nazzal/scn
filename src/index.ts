/** 
 * # Simple classnames
 * ## Example  
 * ### Input:  
 * scn("text-sm", ["text-red", !!error], ["text-green", !error])  
 * ### Output:  
 * "text-sm text-red text-green"
 */
export const scn = (...cn: ([string, boolean] | string)[]) => {
  return cn
    .filter((x) => x[1] != false)
    .map((x) => typeof x == "string" ? x : x[0])
    .join(' ');
};
