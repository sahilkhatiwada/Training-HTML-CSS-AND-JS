document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const termsCheckbox = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError'); 
    const termsError = document.getElementById('termsError');
    
    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            return false;
        } else if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }
    
    function validatePassword() {
        if (passwordInput.value === '') {
            passwordError.textContent = 'Password is required';
            passwordError.style.display = 'block';
            return false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }
    
    function validateTerms() {
        if (!termsCheckbox.checked) {
            termsError.textContent = 'You must agree to the terms';
            termsError.style.display = 'block';
            return false;
        } else {
            termsError.style.display = 'none';
            return true;
        }
    }
    
    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    termsCheckbox.addEventListener('change', validateTerms);
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isTermsValid = validateTerms();
        
        if (isNameValid && isEmailValid && isPasswordValid && isTermsValid) {
            // Form is valid - process the data
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';
            
            // Simulate form submission (in a real app, you would use fetch or XMLHttpRequest)
            setTimeout(function() {
                successMessage.textContent = `Registration successful! Welcome, ${nameInput.value.trim()}`;
                successMessage.style.display = 'block';
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Register';
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        }
    });
    
    // Additional feature: Show password requirements on focus
    passwordInput.addEventListener('focus', function() {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
    });
    
    passwordInput.addEventListener('blur', function() {
        if (passwordInput.value === '') {
            passwordError.style.display = 'none';
        }
    });
});