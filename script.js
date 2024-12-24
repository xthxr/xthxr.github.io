document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}!Your message has been sent. Thanks! for taking out your precious time.`);
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
