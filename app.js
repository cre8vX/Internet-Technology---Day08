// // console.log("Hi!");

// // //localStorage.clear();

// // localStorage.setItem("custName", "Nimal");
// // localStorage.setItem("address", "Galle");
// // localStorage.setItem("phoneNumber", "0712345678");

// // localStorage.removeItem("phoneNumber");

// // let custName = localStorage.getItem("custName");
// // console.log(custName);
// // // -----------------------------------------------------------------------------------------

// // //localStorage.clear();

// // let customer = {
// //     name: "Kamal",
// //     age: "12",
// //     isActive: true
// // };

// // let StringCustomer = JSON.stringify(customer);

// // localStorage.setItem("customer", StringCustomer);

// // let getCustomer = localStorage.getItem("customer");

// // let jsonCustomer = JSON.parse(getCustomer);

// // console.log(jsonCustomer);

// // // console.log(customer);

// // ----------------------------------------------------------------------------------

// let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

// function btnAddCustomerOnAction() {
//     let customer = {
//         id: document.getElementById("txtCustomerId").value,
//         name: document.getElementById("txtCustomerName").value,
//         age: document.getElementById("txtCustomerAge").value,
//         address: document.getElementById("txtCustomerAddress").value
//     }

//     console.log(customerList);

//     customerList.push(customer);

//     localStorage.setItem("customerList", JSON.stringify(customerList));

//     btnLoadTableOnAction(); 
    
//     // alert("Add Customer");
// }

// function btnSearchByIdOnAction() { 
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let customer = customerList.find(customer => {
//         return customer.id === document.getElementById("txtCustomerId").value;
//     });

//     document.getElementById("txtCustomerName").value = customer.name;
//     document.getElementById("txtCustomerAge").value = customer.age;
//     document.getElementById("txtCustomerAddress").value = customer.address;

//     console.log(customer);

//     // alert("Search Customer"); 
// }

// function btnDeleteByIdOnAction() {
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let customerId = document.getElementById("txtCustomerId").value;

//     let index = customerList.findIndex(customer => {
//         return customer.id === customerId;
//     })

//     customerList.splice(index, 1);

//     localStorage.setItem("customerList", JSON.stringify(customerList));

//     console.log(customerList);

//     console.log(index);


//     // alert("Delete Customer");
// }

// function btnUpdateByIdOnAction() {
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let customerId = document.getElementById("txtCustomerId").value;

//     let index = customerList.findIndex(customer => {
//         return customer.id === customerId;
//     })

//     customerList[index].name = document.getElementById("txtCustomerName").value;
//     customerList[index].age = document.getElementById("txtCustomerAge").value;
//     customerList[index].address = document.getElementById("txtCustomerAddress").value;  

//     localStorage.setItem("customerList", JSON.stringify(customerList));
    
//     console.log(customerList);

//     console.log(index);

    
    
//     // alert("Update Customer");
// }

// function btnClearStorageOnAction() {
//     localStorage.clear();
// }

// function btnLoadTableOnAction() {
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let body = `
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Address</th>
//             </tr>
//             `;
//     customerList.forEach(element => {
//         body += `
//             <tr>
//                 <td>${element.id}</td>
//                 <td>${element.name}</td>
//                 <td>${element.age}</td>
//                 <td>${element.address}</td>
//             </tr>
//         `;
//     });

//     document.getElementById("tblCustomer").innerHTML = body;

//     console.log(body);

    
    
//     // alert("Load Table");
// }

// -----------------------------------------------------------------------------------------------------------------------------------

// -------------Weather App-----------------

const apiKey = "f2e2ecd5ae0a4b65bc1223128260710"

const baseUrl = "http://api.weatherapi.com/v1"

fetch(`${baseUrl}/current.json?key=${apiKey}&q=Colombo`).then(res => res.json()).then(data => {
    // console.log(data);

    document.getElementById("contentSection").innerHTML = `
        <div>
            <h1>${data.current.condition.text}</h1>
            <h1>${data.location.name}</h1>
            <img src="${data.current.condition.icon}" alt="">
            <p>${data.location.country}</p>
            <p>${data.current.temp_c}°C</p>
        </div>
    `    
})

function btnSearchOnAction() {
    let txtUserSearchValue = document.getElementById("txtSearchId").value;
    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${txtUserSearchValue}`).then(res => res.json()).then(data => {
    // console.log(data);

    document.getElementById("contentSection").innerHTML = `
        <div>
            <h1>${data.current.condition.text}</h1>
            <h1>${data.location.name}</h1>
            <img src="${data.current.condition.icon}" alt="">
            <p>${data.location.country}</p>
            <p>${data.current.temp_c}°C</p>
        </div>
    `    
})
}


navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});


    




