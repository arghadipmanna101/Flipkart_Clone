// code added for otp:
document.addEventListener('DOMContentLoaded', () => {
    const requestOtpButton = document.getElementById('requestOtpButton');
    const verifyOtpButton = document.getElementById('verifyOtpButton');
  
    // Request OTP
    requestOtpButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent form submission
  
      const email = document.getElementById('inputsin').value;
  
      if (!email) {
        alert('Please enter your email');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:5000/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert('OTP sent to your email');
          // Show OTP verification fields here
        } else {
          alert(result.msg || 'Failed to send OTP');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server will be publically available soon to send otp. ThankYou for visiting.');
      }
    });
  
    // Verify OTP
    verifyOtpButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent form submission
  
      const email = document.getElementById('inputi').value;
      const otp = document.getElementById('otpInput').value; // Add an OTP input field with id `otpInput`
  
      if (!email || !otp) {
        alert('Please enter your email and OTP');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:5000/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, otp }),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert('OTP verified successfully');
          // Proceed with the next steps (e.g., redirect to a different page)
        } else {
          alert(result.msg || 'Failed to verify OTP');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while verifying OTP');
      }
    });
  });
  


document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'footer-login', url: '../footer/footer.html' },
        { id: 'header-login', url: '../header/header.html'}
    ];

    components.forEach(component => {
        fetch(component.url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(component.id).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${component.url}:`, error));
    });
});


document.getElementById('buttonA').addEventListener('click', function() {
    document.getElementById('divA').style.display = 'none';
    document.getElementById('divB').style.display = 'block';
});

document.getElementById('buttonB').addEventListener('click', function() {
    document.getElementById('divB').style.display = 'none';
    document.getElementById('divA').style.display = 'block';
});



// header search bar search function 
setTimeout(() => {  
    const inputField_h = document.getElementById('inputField_h');
    const fetchButton_h = document.getElementById('fetchButton_h');
  
    function fetchValue_h() {
        const value = inputField_h.value;
        window.location.href = `../search/?query=${value}`;
    }
   
    fetchButton_h.addEventListener('click', fetchValue_h);
  
    inputField_h.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            fetchValue_h();
        }
    });
  
  
  }, 500);
  
  //end 