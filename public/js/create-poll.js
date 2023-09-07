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
      document.getElementById('error-modal').classList.remove('hidden');
      
      setTimeout(() => {
        document.getElementById('error-modal').classList.add('hidden');
      }, 3000)
      }
    }
  };
    
  
  let newPollForm = document.querySelector('.new-poll-form');
  newPollForm.addEventListener('submit', newFormHandler);

