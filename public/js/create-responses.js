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
        document.location.reload();
        alert('Thank you for your question! Please make a new question')
    } else {
        const modals = document.getElementById('modals')
        const modal = document.getElementById('create-responses-error')
        modals.classList.remove('hidden')
        setTimeout(() => {
          modal.classList.remove('opacity-0')
          modal.classList.add('opacity-100')
        }, 100)
        setTimeout(() => {
          modal.classList.remove('opacity-100')
          modal.classList.add('opacity-0')
          setTimeout(() => {
            modals.classList.add('hidden')
          }, 100)
        }, 3000)
    }
};

function completePoll(event) {
    event.preventDefault()
    alert('Your poll has been created!')
    document.location.replace('/dashboard')
}

let newPollForm = document.querySelector('.new-question-form');
newPollForm.addEventListener('submit', newFormHandler);

let doneButton = document.querySelector('.im-done');
doneButton.addEventListener('click', completePoll)