const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)
  
      const response = await fetch(`/api/polls/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const modals = document.getElementById('modals')
        const modal = document.getElementById('delete-poll-error')
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

  const deleteButton = document.querySelectorAll('.delete-post')
  deleteButton.forEach(button => {
    button.addEventListener('click', delButtonHandler);
  });