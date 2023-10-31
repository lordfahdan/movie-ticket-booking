export const setDataToLocalStorage = (key, data) => {
  const encryptData = btoa(JSON.stringify(data));
  localStorage.setItem(key, encryptData);
};

export const getDataFromLocalStorage = (key) => {
  let decryptData;
  if (localStorage.getItem(key) !== null) {
    try {
      decryptData = JSON.parse(atob(localStorage.getItem(key)));
    } catch (e) {
      localStorage.removeItem(key);
    }
  }
  return decryptData;
};