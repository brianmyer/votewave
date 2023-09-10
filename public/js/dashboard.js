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
        alert('Failed to delete post');
      }
    }
  };

  const deleteButton = document.querySelectorAll('.delete-post')
  deleteButton.forEach(button => {
    button.addEventListener('click', delButtonHandler);
  });