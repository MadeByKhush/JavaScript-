//student object created !
const student = {
    name: "Rahual Verma",
    Course: "BCA",
    age: 21,
    email: "rahulVerma@gmail.com",
    address: {
        street: "7/59 Gandhi Nagar",
        city: "Ahemdabad",
        state: "Gujarat",
        pincode: 380004
    }
};

//get card container
let cardDiv = document.getElementById("userCard");

//injecting the values into html
cardDiv.innerHTML = `<h2><span id="para">${student.name}</span></h2>
<p><strong>Course </strong>${student.Course}</p>
<p><strong>Age </strong>${student.age}</p>
<p><strong>Email </strong>${student.email}</p>
  <p><strong>Address:</strong></p>
  <p>${student.address.street}</p>
  <p>${student.address.city}, ${student.address.state} - ${student.address.pincode}</p>
`;