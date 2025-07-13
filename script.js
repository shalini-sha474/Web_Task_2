document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('All fields are required.');
      return;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Form submitted successfully!');
  });  