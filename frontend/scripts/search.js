const apiRoot = "http://localhost:8888/"
const utils = require("./utils");

class SearchClass {

    constructor() {
    }

    /*
    * Make GET request to retreive the word definition.
    */
    searchWord() {
        const xhttp = new XMLHttpRequest();
        let word = document.getElementById("input").value;
        //TODO: make sure input is alpha 
        if (utils.isValidWord(word)) {
            xhttp.open("GET", `${apiRoot}/definitions/?word=${word}`, true);
            xhttp.send();
            xhttp.onreadystatechange = () => {

            }
        }
        else {
            alert("Please enter a valid word (letters only)");
            return false;
        }

    }

}



document.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    const searcher = new SearchClass();

}