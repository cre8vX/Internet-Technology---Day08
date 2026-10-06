console.log("Hi!");

//localStorage.clear();

localStorage.setItem("custName", "Nimal");
localStorage.setItem("address", "Galle");
localStorage.setItem("phoneNumber", "0712345678");

localStorage.removeItem("phoneNumber");

let custName = localStorage.getItem("custName");
console.log(custName);
// -----------------------------------------------------------------------------------------

//localStorage.clear();

let customer = {
    name: "Kamal",
    age: "12",
    isActive: true
};

let StringCustomer = JSON.stringify(customer);

localStorage.setItem("customer", StringCustomer);

let getCustomer = localStorage.getItem("customer");

let jsonCustomer = JSON.parse(getCustomer);

console.log(jsonCustomer);

// console.log(customer);
