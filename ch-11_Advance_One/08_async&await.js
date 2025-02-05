// async function greeting() {
//   return "hi there";
// }
// greeting().then((msg) => {
//   console.log(msg);
// });

async function display() {
    return Promise.resolve("hello the promise is resolved and completed");
  }
  display().then((promise) => {
    console.log(promise);
  });
  
  async function throwError() {
    throw new Error("something went wrong");
  }
  
  throwError()
    .then(() => {
      console.log("promise completed successfully");
    })
    .catch((error) => {
      console.log(error);
    });
  