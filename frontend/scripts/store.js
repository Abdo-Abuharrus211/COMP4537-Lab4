const apiRoot = "http://localhost:8888/"

class StoreClass {
    
    constructor(){
    }

    /*
    * Make POST request to store the word.
    */
    storeWord(){
        const xhttp = new XMLHttpRequest();
        let word = document.getElementById("input").value;
        //TODO: make sure input is alpha 
        xhttp.open("POST", `${apiRoot}/definitions/`, true);
        xhttp.send(word);
        xhttp.onreadystatechange = () =>{

        }

    }
}


window.onload(() =>{
    main();
});

function main(){
    const storer = StoreClass();
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", ()=>{
        storer.storeWord();
    })

}
