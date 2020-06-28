const api = {
    key: "ecddcae668690a57c873375393f18153",
baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbar = document.querySelector(".search-bar");
searchbar.addEventListener("keypress",setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbar.value);
        console.log(searchbar.value);
    }
}