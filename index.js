import "./styles.css";

var serverURL = "https://api.funtranslations.com/translate/pirate.json";
var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var divOutput = document.querySelector("#div-output");
var loader = document.querySelector(".lds-ring");

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  displayLoading();
  console.log("clicked");
  var inputText = txtInput.value;
  fetch(getTranslationURL(inputText))
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      hideLoading();
      var translatedText = json.contents.translated;
      divOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  alert("Something went wong with server! Try after sometime.");
}

// show loading spinner
function displayLoading() {
  loader.classList.add("display");
}

// hiding loading spinner
function hideLoading() {
  loader.classList.remove("display");
}
