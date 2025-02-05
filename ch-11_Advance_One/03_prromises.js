//creating a promise
// const promiseOne = new Promise(function (resolve, reject) {
//   //do an async task
//   //db calls, cryptography , network related

//   setTimeout(() => {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);

//   //for connecitng the resolve and then we have a method -> resolve();
// });

//consuming a promise
// by using .then method
//.then is directly linked to resolve in the promise
//in .then you recieve a callback/function
//this callback function automatically recieves an argument from the creation

// promiseOne.then(function () {
//   console.log("promise consumed 01");
// });

//creating and using promise without storing it into a variable
new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("async task two");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("async two resolved");
  });
  
  // const promiseThree = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve({ username: "muskan", email: "muskandhaka@gmail.com" }); //you can also pass data into resolve and mostly the data is of type object in most cases
  //     //this data is passed to the .then
  //   }, 1000);
  // });
  
  //all the values are returned in .then by default from the resolve
  // promiseThree.then(function (user) {
  //   console.log(user); //{ username: 'muskan', email: 'muskandhaka@gmail.com' }
  // });
  
  // const promiseFour = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     let error = false;
  //     if (!error) {
  //       resolve({ username: "muskan", pwd: "123" });
  //     } else {
  //       //reject gives you an error
  //       reject("ERROR : something went wrong !!!");
  //     }
  //   }, 2000);
  // });
  //we use .catch for reject
  //promiseFour.then().catch();
  
  //we cannot fetch the data from the promise this way
  // const username = promiseFour.then((user) => {
  //   //callback hell
  //   console.log(user);
  //   return user.username;
  // });
  // console.log(username);
  
  // instead we have to do chaining
  // promiseFour
  //   .then((user) => {
  //     console.log(user);
  //     return user.username;
  //   })
  //   .then((myusername) => {
  //     console.log(myusername);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     console.log("the promise is either resolved or rejected");
  //   });
  
  // const promiseFive = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     let error = true;
  //     if (!error) {
  //       resolve({ username: "javascript", password: "123" });
  //     } else {
  //       reject("js WENT WRONG !!");
  //     }
  //   });
  // });
  //async await
  //async
  //async and await cannot handle error directly so we use try-catch block for handling error
  // async function consumePRomiseFive() {
  //   try {
  //     const response = await promiseFive;
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // consumePRomiseFive();
  
  // async function getAllUsers() {
  //   try {
  //     const allUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await allUsers.json(); //conversion to json also takes time so we need to do wait here as well
  //     console.log(data);
  //     //console.log(allUsers);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // getAllUsers();
  
  fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("promise completed");
    });
  