//second callback function to handle the text returned 
function onTextReady(text){
    console.log(text);
    let responses = document.querySelector("#render")
    responses.textContent = text ;
    responses.style.cssText = "color: red";
}

//first callback function
function onResponse(responses){
    return responses.text();
}

function processSubmit(e){
    e.preventDefault();
    let names = document.querySelector('#name');

    let emails = document.querySelector('#email')

    let messages = document.querySelector('#message');


    const message1 = {
        name: names.value,
        email: emails.value,
        message: messages.value
    };

    const processed = JSON.stringify(message1);

    const fetchOptions = {
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: processed


    }

    fetch('http://localhost:3000/form', fetchOptions )
        .then(onResponse)
        .then(onTextReady)


}

let submit = document.querySelector('#submit')
submit.addEventListener('click', processSubmit);
