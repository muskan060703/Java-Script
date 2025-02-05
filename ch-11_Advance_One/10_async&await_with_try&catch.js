async function getData() {
    try {
      const response = await fetch("https://randomuser.me/api/", {
        cache: "force-cache",
      });
  
      const data = await response.json();
      console.dir(data, null);
    } catch (error) {
      console.log("OOPS you got some error : ", error);
    }
  }
  
  getData().then(() => {
    getData().then(() => {
      getData().then(() => {
        getData().then();
      });
    });
  });
  