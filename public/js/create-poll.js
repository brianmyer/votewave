
async function newFormHandler (event) {
    event.preventDefault();
  
    const name = document.querySelector('#poll-name').value.trim();
    const description = document.querySelector('#poll-desc').value.trim();
    // const question = document.querySelector('#poll-question').value.trim();

    if (name && description) {
      const response = await fetch(`/api/polls`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to create poll');
      }
    }
  };

  const newResponseOption = (event) => {
    if (event.target.matches('#add-response')) {
        const newResponse = document.createElement('input');
        responses.appendChild(newResponse);
    
    }
    }
    
  
//   let responses = document.querySelector('#responses');
//   responses.addEventListener('click', newResponseOption);

  let newPollForm = document.querySelector('.new-poll-form');
  newPollForm.addEventListener('submit', newFormHandler());

