// Add your code here
function submitData(nameInput, emailInput) {
    let formData = {};
    formData.name = `${nameInput}`
    formData.email = `${emailInput}`

    const configureData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };

    return fetch("http://localhost:3000/users", configureData)
    .then(function (response) {
    //  console.log(response)
        return response.json();
    })
    .then(function (object) {
    //    console.log(object)
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        document.body.innerHTML = error
    })

}


      
//   fetch("http://localhost:3000/users", configureData)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });
//     .catch(function (error) {
//         alert("Invalid name or email");
//         console.log(error.message);
//     });