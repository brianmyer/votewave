const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    const modals = document.getElementById('modals')
    const modal = document.getElementById('logout-error')
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

document.querySelector('#logout').addEventListener('click', logout);
