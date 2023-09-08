async function newFormHandler (event) {
    event.preventDefault();
  
    const name = document.querySelector('#poll-name').value.trim();
    const description = document.querySelector('#poll-desc').value.trim();

    if (name && description) {
      const response = await fetch(`/api/polls`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (response.ok) {
        let poll = await response.json()

        document.location.replace(`/create-responses/${poll.id}`);
      } else {
        const modals = document.getElementById('modals')
        const modal = document.getElementById('create-poll-error')
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
    }
  };
  
  
  let newPollForm = document.querySelector('.new-poll-form');
  newPollForm.addEventListener('submit', newFormHandler);

