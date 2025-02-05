const fetchDate = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
  });
  fetchDate
    .then((result) => {
      console.log("result 01 : ", result);
      return result * 2;
    })
    .then((result) => {
      console.log("result 02 : ", result);
      return result + 5;
    })
    .then((result) => {
      console.log("fainaly result :", result);
    })
    .catch(() => {
      console.log("something went wrong");
    });
  