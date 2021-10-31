export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((resolve) => {
        if (resolve.status < 400) {
          return resolve.json();
        } else {
          throw resolve;
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        err.json().then((e) => {
          reject(e);
          console.log('Error_21: ', e);
        });
      });
  });
};
