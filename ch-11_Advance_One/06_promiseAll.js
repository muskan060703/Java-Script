const promise01 = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve("promise 1 completed");
      } else {
        reject("promise 1 is rejected");
      }
    }, 2000);
  });
  
  const promise02 = new Promise((fulfill, unfulfill) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        fulfill("promise 2 is completed");
      } else {
        unfulfill("promise 2 is rejected");
      }
    }, 1000);
  });
  
  const promise03 = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
      resolve("promise 3 completed");
    } else {
      reject("promise 3 is rejected");
    }
  });
  
  const promise04 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("promise 4 completed");
    } else {
      reject("promise 4 is rejected");
    }
  });
  
  promise01
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });
  
  promise02
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });
  
  promise03
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });
  
  promise04
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });
  
  Promise.all([promise01, promise02, promise03, promise04])
    .then((result) => {
      console.log("Promise.all : ", result);
    })
    .catch(() => {
      console.log("Promise.all: error");
    });
  
  Promise.race([promise01, promise02])
    .then((result) => {
      console.log("Promise.race : ", result);
    })
    .catch(() => {
      console.log("Promise.race: error");
    });
  
  Promise.allSettled([promise01, promise02, promise03, promise04])
    .then((result) => {
      console.log("Promise.allSettled : ", result);
    })
    .catch(() => {
      console.log("Promise.allSettled: error");
    });
  Promise.any([promise01, promise02, promise03, promise04])
    .then((result) => {
      console.log("promise.any : ", result);
    })
    .catch(() => {
      console.log("promise.any : error");
    });
  