const delButtonHandler = async (event) => {
    if (event.target.id === 'delete') {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/polls/${id}`, {
        method: 'DELETE',
      });
  
       document.location.replace('/dashboard');
   
    }
  };

  document
  .querySelector('.poll-list')
  .addEventListener('click', delButtonHandler);