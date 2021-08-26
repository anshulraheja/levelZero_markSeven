# Pirate Language Translator App

# Description

###### (levelZero_markSeven)

The app translates the text entered by the user into the pirate language. The text conversion happens through an [API](https://api.funtranslations.com/).

### My learnings

**1. fetch():** The fetch() method is used to request to the server and load the information in the webpages. It does not directly return the JSON response body but instead returns a promise that resolves with a Response object. The Response object does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method.

```javascript
fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

**2. Element.classList :** Returns collection of the class attributes of the DOM element.
Adding and Removing class to a DOM element can be done like this -

```javascript
classList.add("className");
classList.remove("className");
```

### Tech Stack

Javascript, CSS, HTML

# Installation

```bash
git clone
```
