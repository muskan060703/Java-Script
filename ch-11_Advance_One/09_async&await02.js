async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    return data;
  }
  
  fetchData()
    .then((userData) => {
      console.log("user fetched data : ", userData);
    })
    .catch((error) => {
      console.log("oops some error occured : ", error);
    });
  