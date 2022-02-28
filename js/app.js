const searchPhone = () => {
  const searchText = document.getElementById("search-field").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  // load data
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "single-result col-lg-4 my-3 p-3";
    phoneDiv.innerHTML = `
      <div class="phone-details">
      <div class="profile-pic w-50 m-auto rounded">
          <img class="w-50" src="${phone.image}" alt="">
      </div>
      <h3>Phone Name: ${phone.phone_name}</h3>
      <h4>Brand: ${phone.brand} </h4>
  </div>
  `;
    phoneContainer.appendChild(phoneDiv);
  });
};
