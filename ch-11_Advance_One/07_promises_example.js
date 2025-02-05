// Simulate fetching a user by ID
function getUser(userId, callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
      const user = { id: userId, name: "John Doe" }; // Simulated user data
      callback(user); // Pass the user object to the callback function
    }, 1000); // Simulate 1 second delay
  }
  
  // Simulate fetching orders for a user by their ID
  function getOrders(userId, callback) {
    console.log(`Fetching orders for user ID: ${userId}...`);
    setTimeout(() => {
      const orders = [
        { id: 101, item: "Laptop" },
        { id: 102, item: "Smartphone" },
      ]; // Simulated orders
      callback(orders); // Pass the orders array to the callback function
    }, 1000); // Simulate 1 second delay
  }
  
  // Simulate fetching details of an order by its ID
  function getOrderDetails(orderId, callback) {
    console.log(`Fetching details for order ID: ${orderId}...`);
    setTimeout(() => {
      const details = {
        id: orderId,
        status: "Shipped",
        deliveryDate: "2025-01-30",
      }; // Simulated order details
      callback(details); // Pass the order details to the callback function
    }, 1000); // Simulate 1 second delay
  }
  
  // Callback function to handle user data
  function handleUser(user) {
    console.log("User data fetched:", user);
  
    // Fetch orders for the user
    getOrders(user.id, handleOrders);
  }
  
  // Callback function to handle orders data
  function handleOrders(orders) {
    console.log("Orders fetched:", orders);
  
    // Fetch details for each order
    orders.forEach((order) => {
      getOrderDetails(order.id, handleOrderDetails);
    });
  }
  
  // Callback function to handle order details
  function handleOrderDetails(details) {
    console.log("Order details fetched:", details);
  }
  
  // Start the program by fetching a user with a specific ID
  const userId = 1; // Simulated user ID
  getUser(userId, handleUser);
  