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
      console.log(response)
      document.location.replace(`/results/${poll_id}`);

      const modals = document.getElementById('modals')
      const modal = document.getElementById('vote-success')
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
    else {
        console.log('nope.avi')
          }  
        } 
}


let responseGroup = document.querySelector('.response-group')
responseGroup.addEventListener('click', responseHandler)