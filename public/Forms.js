//second callback function to handle the text returned 
function onTextReady(text){
    console.log(text);
    let response = document.querySelector("#post-response")
    response.textContent = text ;
    response.style.cssText = "color: red";
}

//first callback function
function onResponse(response){
    return response.text();

}

//data sent to node
const message = {
    quote: ` “Sustainability creates security of a future” - Mark Teller (Senior
        Sustainability Manager at NFU) `
    
};

// convert JS object to JSON
const serializedMessage =JSON.stringify(message);

// the request data
const fetchOptions = {
    method: 'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: serializedMessage
}

fetch('http://localhost:3000/form',fetchOptions )
.then(onResponse)
.then(onTextReady);
