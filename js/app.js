const searchPhone = () => {
  const searchText = document.getElementById("search-field").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  // load data
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
  // .catch((error) =>
  //   displayError("Something Went Wrong!! Please try again later!")
  // );
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "single-result row align-items-center my-3 p-3";
    phoneDiv.innerHTML = `
      <div class="phone-details">
      <div class="profile-pic w-50 m-auto rounded">
          <img class="w-50" src="" alt="">
      </div>
      <h1>Phone Name: cool</h1>
      <h3>Brand:oh that working</h3>
      <h4>Slug: do</h4>
  </div>
  `;
    phoneContainer.appendChild(phoneDiv);
  });
};
