//fetching data with time-stamp

async function fetchDatawithTimeStamp() {
    const startTime = Date.now();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          cache: "no-cahce",
        }
      );
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      console.log(`The time taken to fetch request : ${timeTaken} `);
    } catch (error) {}
  }
  