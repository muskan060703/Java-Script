const promise = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve("operation successfull");
      } else {
        reject("operation failed");
      }
    }, 3000);
  });
  console.log(promise);
  console.log(typeof promise);
  
  promise
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    })
    .finally(() => {
      console.log("promise completed");
    });
  