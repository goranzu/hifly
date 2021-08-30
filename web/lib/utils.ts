function throttle(cb: () => any, wait = 250) {
  let throttled = false;
  return function () {
    if (!throttled) {
      cb();
      throttled = true;
      setTimeout(() => (throttled = false), wait);
    }
  };
}

export { throttle };
