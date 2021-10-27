/**
 *  pipe doing each functions and return the result.
 * @param any
 */
export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
