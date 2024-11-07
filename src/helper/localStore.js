export function getItem(key) {
  try {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }

    return JSON.parse(value);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function setItem(key, value = '') {
  try {
    const stringify = JSON.stringify(value);

    localStorage.setItem(key, stringify);
  } catch (e) {
    console.log(e);
    return null;
  }
}
