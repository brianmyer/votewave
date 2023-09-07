async function newFormHandler(event) {
    event.preventDefault();

    const text = document.querySelector('#question-text').value.trim();
    const response1 = document.querySelector('#response1').value.trim();
    const response2 = document.querySelector('#response2').value.trim();
    let response3 = document.querySelector('#response3').value.trim();
    let response4 = document.querySelector('#response4').value.trim();
    let response5 = document.querySelector('#response5').value.trim();
    let question;

    if (text && response1 && response2) {
        const fullURL = window.location.href;
        const urlParts = fullURL.split('/');
        const lastParameter = urlParts[urlParts.length - 1];
        if (response3 === '') {response3 = null}
        if (response4 === '') {response4 = null}
        if (response5 === '') {response5 = null}
        question = await fetch(`/api/questions/${lastParameter}`, {
            method: 'POST',
            body: JSON.stringify({ text, response1, response2, response3, response4, response5 }),
            headers: {
                'Content-Type': 'application/json'
            },

        });
    }
    if (question.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert('Failed to create question');
    }
};

// async function newResponseOption(event) {
//     if (event.target.matches('#add-response')) {
//         const newResponse = document.createElement('input');
//         newResponse.setAttribute('class', 'response')
//         responses.appendChild(newResponse);

//     }
// }


// let responses = document.querySelector('#responses');
// responses.addEventListener('click', newResponseOption);

let newPollForm = document.querySelector('.new-question-form');
newPollForm.addEventListener('submit', newFormHandler);

