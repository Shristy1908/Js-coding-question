const user = {
  name: "Shristy",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

// shallowCopy
const shallowCopy = {...user}
user.address.city="hazaribagh";
document.writeln(shallowCopy.address.city);



// deepCopy
const deepCopy = JSON.parse(JSON.stringify(user));
user.address.city = "Ranchi";
document.writeln(deepCopy.address.city);