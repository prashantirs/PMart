export const checkArraySanity = (array) => {
  if (!array) return false;
  if (!Array.isArray(array)) return false;
  if (!array.length) return false;
  return true;
};

export const checkObjectSanity = (object) => {
  if (object === null || typeof object === "undefined") return false;
  if (typeof object !== "object") return false;
  if (Array.isArray(object)) return false;
  if (Object.keys(object).length === 0) return false;
  return true;
};

let timeout;

export const debounce = (callback, delay = 1000) => {
  clearTimeout(timeout);
  
  timeout = setTimeout(() => {
    callback();
  }, delay);
};
