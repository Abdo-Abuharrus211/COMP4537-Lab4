const http = require('http');
const apiRoot = "http://localhost:8888/"
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
        xhttp.open("GET", `${apiRoot}/definitions/?word=${word}`, true);
        xhttp.send();
        xhttp.onreadystatechange = () => {

        }

    }

}



window.onload(() => {
    main();
});

function main() {
    const searcher = SearchClass();

}