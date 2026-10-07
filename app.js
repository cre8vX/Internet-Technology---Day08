// console.log("Hi!");

// //localStorage.clear();

// localStorage.setItem("custName", "Nimal");
// localStorage.setItem("address", "Galle");
// localStorage.setItem("phoneNumber", "0712345678");

// localStorage.removeItem("phoneNumber");

// let custName = localStorage.getItem("custName");
// console.log(custName);
// // -----------------------------------------------------------------------------------------

// //localStorage.clear();

// let customer = {
//     name: "Kamal",
//     age: "12",
//     isActive: true
// };

// let StringCustomer = JSON.stringify(customer);

// localStorage.setItem("customer", StringCustomer);

// let getCustomer = localStorage.getItem("customer");

// let jsonCustomer = JSON.parse(getCustomer);

// console.log(jsonCustomer);

// // console.log(customer);

// ----------------------------------------------------------------------------------

const customerList = [];

function btnAddCustomerOnAction() {
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }

    console.log(customerList);

    customerList.push(customer);

    localStorage.setItem("customerList", JSON.stringify(customerList));
    
    // alert("Add Customer");
}

function btnSearchByIdOnAction() { 
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customer = customerList.find(customer => {
        return customer.id === document.getElementById("txtCustomerId").value;
    });

    document.getElementById("txtCustomerName").value = customer.name;
    document.getElementById("txtCustomerAge").value = customer.age;
    document.getElementById("txtCustomerAddress").value = customer.address;

    console.log(customer);

    // alert("Search Customer"); 
}

function btnDeleteByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customerId = document.getElementById("txtCustomerId").value;

    let index = customerList.findIndex(customer => {
        return customer.id === customerId;
    })

    customerList.splice(index, 1);

    localStorage.setItem("customerList", JSON.stringify(customerList));

    console.log(customerList);

    console.log(index);


    // alert("Delete Customer");
}

function btnUpdateByIdOnAction() {
    alert("Update Customer");
}

function btnClearStorageOnAction() {
    localStorage.clear();
}

function btnLoadTableOnAction() {
    alert("Load Table");
}

