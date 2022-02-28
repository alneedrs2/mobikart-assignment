const searchPhone = () => {
  const searchText = document.getElementById("search-field").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  // load data
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};
// about phone
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  if (!phones) {
    const displayError = (error) => {
      const errorTag = document.getElementById("error-message");
      errorTag.innerText = error;
    };
  }
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "card col-lg-4 my-1 p-3";
    phoneDiv.innerHTML = `
      <div class="phone-details">
      <div class="profile-pic w-50 m-auto rounded">
          <img class="w-50" src="${phone.image}" alt="">
      </div>
      <h3>Phone Name: ${phone.phone_name}</h3>
      <h4>Brand: ${phone.brand} </h4>
  </div>
  <div class="mt-4">
        <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-success">Phone Details</button>
  </div>
  `;
    phoneContainer.appendChild(phoneDiv);
  });
};
// about phone details

const loadPhoneDetail = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayloadPhoneDetail(data.data));
};

const displayloadPhoneDetail = (phone) => {
  // console.log(phone);

  phoneDetails = document.getElementById("phone-details");
  phoneDetails.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
      <div class ="card-body ">
      <img src="${phone.image}">
      <h3>Name: ${phone.name}</h3>
      <h5>Realease Date: ${phone.releaseDate}</h5>
      <h4>Main Features</h4>
      <p> ${phone?.mainFeatures?.sensors}</p>
      <p> ${phone?.mainFeatures?.chipSet}</p>
      <p> ${phone?.mainFeatures?.displaySize}</p>
      <p> ${phone?.mainFeatures?.memory}</p>
      <p> ${phone?.mainFeatures?.storage}</p>
      <h4>Other features</h4>
      <h6>Bluetooth:${phone?.others?.Bluetooth}</h6>
      <h6>NFS: ${phone?.others?.NFC}</h6>
      <h6>GPS: ${phone?.others?.GPS}</h6>
      <h6>Radio: ${phone?.others?.Radio}</h6>
      <h6>Wifi: ${phone?.others?.WLAN}</h6>
  `;
  phoneDetails.appendChild(div);
};
