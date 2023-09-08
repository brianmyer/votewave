async function responseHandler (event) {
    let indexNumber = event.target.getAttribute('data-index')
    let question_id = event.target.getAttribute('data-question')
    if (indexNumber && question_id) {
        const response = await fetch(`/api/responses`, {
            method: 'POST',
            body: JSON.stringify({ indexNumber, question_id }),
            headers: {
              'Content-Type': 'application/json'
            },
          });

    if (response.ok) {
      document.location.replace(`/results/${question_id}`);
    }
    else {
        console.log('nope.avi')
          }  
        } 
}


let responseGroup = document.querySelector('.response-group')
responseGroup.addEventListener('click', responseHandler)