document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const mobile = document.getElementById('mobile').value;
  
        fetch('http://localhost:3000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password, mobile })
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          window.location.href = 'signin.html';
        })
        .catch(error => console.error('Error:', error));
      });
    }
  
    if (signinForm) {
      signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Submit the form data to the server using fetch API
        fetch('http://localhost:3000/api/users/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
          alert('Sign in successful!');
        })
        .catch(error => console.error('Error:', error));
      });
    }
  });
  