function pipe(...fns) {
  return function (initVal) {
    return fns.reduce((accu, fn) => fn(accu), initVal);
  };
}
