const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const genderInput = document.querySelector('input[name="gender"]');
const dobInput = document.querySelector('#dob');
const privacyInput = document.querySelector('#privacy');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value === '') {
        alert('Please enter your name');
        return;
    }

    if (emailInput.value === '') {
        alert('Please enter your email');
        return;
    }

    if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    if (addressInput.value === '') {
        alert('Please enter your address');
        return;
    }

    if (!genderInput.checked) {
        alert('Please select your gender');
        return;
    }

    if (dobInput.value === '') {
        alert('Please enter your date of birth');
        return;
    }

    if (!privacyInput.checked) {
        alert('Please agree to the privacy policy');
        return;
    }

    form.submit();
    
    alert('Form has been submitted!');
});    