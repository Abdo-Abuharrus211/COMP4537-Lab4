const apiRoot = "http://localhost:8888/"
import { isValidWord } from "./utils.js";

class StoreClass {

    constructor() {
    }

    /*
    * Make POST request to store the word.
    */
    storeWord() {
        const xhttp = new XMLHttpRequest();
        let word = document.getElementById("input").value;
        //TODO: make sure input is alpha 
        if (isValidWord(word)) {
            // xhttp.open("POST", `${apiRoot}/definitions/`, true);
            // xhttp.send(word);
            // xhttp.onreadystatechange = () => {
            alert("YESDS");
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
    const storer = new StoreClass();
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", () => {
        storer.storeWord();
    })

}
