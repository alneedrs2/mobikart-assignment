// search mobile option

const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  if (searchText == "") {
    alert(" Please Enter a Phone Name!");
  } else {
    searchField.value = "";

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.data));
  }
};

// search result

const displaySearchResult = (data) => {
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";

  // console.log(data);
  if (data.length == 0) {
    alert("Phone Not Found! Please Enter a Valid Phone Name.");
  } else {
    data.slice(0, 20).forEach((datas) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `        
        <div   class="card align-items-center">        
        <img class="w-50 p-5" src="${datas.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${datas.phone_name}</h4>
        <h5> Brand: ${datas.brand}</h5>  
        </div>
        <button onclick="(loadPhoneDetail('${datas.slug}'))" class="btn btn-success">Phone Details</button>
        `;
      searchResult.appendChild(div);
    });
  }
};

// phone details

const loadPhoneDetail = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayloadPhoneDetail(data.data));
};

const displayloadPhoneDetail = (datas) => {
  // console.log(datas);

  phoneDetails = document.getElementById("phone-details");
  phoneDetails.innerHTML = "";
  const div = document.createElement("div");
  div.className = "col col-lg-4 col-sm-12";
  if (!datas.releaseDate) {
    div.innerHTML = `
  <div class ="card-body ">
  <img src="${datas.image}">
  <h2>Name: ${datas.name}</h2>
  <h4>Release Date:</h4><p> Release Date Not Found.</p> 
  <h4>Main Features</h4>
  <p>Platform: ${datas.mainFeatures?.chipSet}</p>
  <p>Display: ${datas.mainFeatures?.displaySize}</p>
  <p>Memory: ${datas.mainFeatures?.memory}</p>
  <p>Storage: ${datas.mainFeatures?.storage}</p>
  <h4>Special Features</h4>
  <p>Sensors: ${datas.mainFeatures?.sensors}</p>
  <h4>Other Features</h4>
  <p>Bluetooth:${
    datas.others?.Bluetooth ? datas.others?.Bluetooth : " No Bluetooth"
  }</p>
  <p>NFS: ${datas.others?.NFC ? datas.others?.Bluetooth : " No NFS"}</p>
  <p>GPS: ${datas.others?.GPS ? datas.others?.Bluetooth : " No GPS"}</p>
  <p>Radio: ${datas.others?.Radio ? datas.others?.Bluetooth : " No Radio"}</p>
  <p>USB: ${datas.others?.USB ? datas.others?.Bluetooth : " No USB"}
  <p>WLAN: ${datas.others?.WLAN ? datas.others?.Bluetooth : " No WLAN"}</p>   
  </div>
  `;
    phoneDetails.appendChild(div);
  } else {
    div.innerHTML = `
    <div class ="card-body ">
    <img src="${datas.image}">
    <h2>Name: ${datas.name}</h2>
    <h5>Release Date: </h5><p>${datas.releaseDate}</p> 
    <h4>Main Features</h4>
    <p>Platform: ${datas.mainFeatures?.chipSet}</p>
    <p>Display: ${datas.mainFeatures?.displaySize}</p>
    <p>Memory: ${datas.mainFeatures?.memory}</p>
    <p>Storage: ${datas.mainFeatures?.storage}</p>
    <h4>Special Features</h4>
    <p>Sensors: ${datas.mainFeatures?.sensors}</p>
    <h4>Other Features</h4>
    <p>Bluetooth:${
      datas.others?.Bluetooth ? datas.others?.Bluetooth : " No Bluetooth"
    }</p>
    <p>NFS: ${datas.others?.NFC ? datas.others?.Bluetooth : " No NFS"}</p>
    <p>GPS: ${datas.others?.GPS ? datas.others?.Bluetooth : " No GPS"}</p>
    <p>Radio: ${datas.others?.Radio ? datas.others?.Bluetooth : " No Radio"}</p>
    <p>USB: ${datas.others?.USB ? datas.others?.Bluetooth : " No USB"}
    <p>WLAN: ${
      datas.others?.WLAN ? datas.others?.Bluetooth : " No WLAN"
    }</p>    
    </div>
    `;
    phoneDetails.appendChild(div);
  }
};
