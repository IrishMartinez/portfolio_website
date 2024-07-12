document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar a, .contact');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll('.service-box');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    serviceBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < windowHeight * 0.8) { 
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); 
});



document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
document.querySelector('.chat').addEventListener('click', function(event) {
  event.preventDefault(); 

  const email = ""; 
  const subject = "I miss you yan subject natin";
  const body = "Hello, I'd like to chat with you kase miss na kita..."; 

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  
  window.location.href = mailtoLink;
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Show the message
        const messageSentDiv = document.getElementById('message-sent');
        messageSentDiv.style.display = 'block'; // Make the message visible

        // Optionally, reset the form
        this.reset();
    });
});






