// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(fn, wait, immediate) {
  let timeout;

  return () => {
    const args = arguments;
    const later = () => {
      timeout = null;

      if (!immediate) {
        fn.apply(null, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      fn.apply(null, args);
    }
  };
}

const myEfficientFn = debounce(() => {
  // All the taxing stuff you do
}, 200);

window.addEventListener('scroll', myEfficientFn);
