        document.addEventListener('DOMContentLoaded', function() {
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true
                });
            }
            
            if (typeof particlesJS !== 'undefined') {
                particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#6d28d9"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            }
                        },
                        "opacity": {
                            "value": 0.3,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#6d28d9",
                            "opacity": 0.2,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 0.5
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                });
            }
            
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => {
                    const countrySelect = document.getElementById('country');
                    const countryCodeSelect = document.getElementById('country_code');
                    
                    if (!countrySelect || !countryCodeSelect) return;

                    data.sort((a, b) => a.name.common.localeCompare(b.name.common));

                    const selectedCountry = "<?php echo isset($_POST['country']) ? htmlspecialchars($_POST['country']) : ''; ?>";
                    const selectedCountryCode = "<?php echo isset($_POST['country_code']) ? htmlspecialchars($_POST['country_code']) : ''; ?>";

                    data.forEach(country => {
                        const countryOption = document.createElement('option');
                        countryOption.value = country.name.common;
                        countryOption.textContent = country.name.common;
                        if (country.name.common === selectedCountry) {
                            countryOption.selected = true;
                        }
                        countrySelect.appendChild(countryOption);

                        const countryCodeOption = document.createElement('option');
                        countryCodeOption.value = country.cca2;
                        countryCodeOption.textContent = `${country.cca2} - ${country.name.common}`;
                        if (country.cca2 === selectedCountryCode) {
                            countryCodeOption.selected = true;
                        }
                        countryCodeSelect.appendChild(countryCodeOption);
                    });
                })
                .catch(error => {
                    console.error('Error fetching country data:', error);
                    const countrySelect = document.getElementById('country');
                    const countryCodeSelect = document.getElementById('country_code');
                    
                    if (countrySelect && countryCodeSelect) {
                        const fallbackCountries = [
                            {name: "United States", code: "US"},
                            {name: "United Kingdom", code: "GB"},
                            {name: "Canada", code: "CA"},
                            {name: "Australia", code: "AU"},
                            {name: "Germany", code: "DE"},
                            {name: "France", code: "FR"},
                            {name: "Japan", code: "JP"},
                            {name: "China", code: "CN"},
                            {name: "India", code: "IN"},
                            {name: "Brazil", code: "BR"}
                        ];
                        
                        fallbackCountries.forEach(country => {
                            const countryOption = document.createElement('option');
                            countryOption.value = country.name;
                            countryOption.textContent = country.name;
                            countrySelect.appendChild(countryOption);

                            const countryCodeOption = document.createElement('option');
                            countryCodeOption.value = country.code;
                            countryCodeOption.textContent = `${country.code} - ${country.name}`;
                            countryCodeSelect.appendChild(countryCodeOption);
                        });
                    }
                });
            
            const togglePassword = document.getElementById('toggle-password');
            const passwordInput = document.getElementById('password');
            
            if (togglePassword && passwordInput) {
                togglePassword.addEventListener('click', function() {
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordInput.setAttribute('type', type);
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-eye');
                        icon.classList.toggle('fa-eye-slash');
                    }
                });
            }
            
            const passwordStrength = document.getElementById('password-strength');
            const passwordFeedback = document.getElementById('password-feedback');
            
            if (passwordInput && passwordStrength && passwordFeedback) {
                passwordInput.addEventListener('input', function() {
                    const password = this.value;
                    let strength = 0;
                    let feedback = '';
                    
                    if (password.length >= 8) {
                        strength += 1;
                        feedback = 'Good length';
                    } else {
                        feedback = 'Password must be at least 8 characters';
                    }
                    
                    if (password.match(/[A-Z]/)) {
                        strength += 1;
                        feedback += password.length >= 8 ? ', has uppercase' : '';
                    }
                    
                    if (password.match(/[0-9]/)) {
                        strength += 1;
                        feedback += password.length >= 8 ? ', has number' : '';
                    }
                    
                    if (password.match(/[^A-Za-z0-9]/)) {
                        strength += 1;
                        feedback += password.length >= 8 ? ', has special character' : '';
                    }
                    
                    passwordStrength.className = 'h-full transition-all duration-300';
                    
                    if (password.length === 0) {
                        passwordStrength.style.width = '0';
                        passwordFeedback.textContent = 'Password must be at least 8 characters';
                        passwordFeedback.className = 'text-xs text-gray-400 mt-1';
                    } else if (strength < 2) {
                        passwordStrength.style.width = '25%';
                        passwordStrength.style.backgroundColor = '#ef4444';
                        passwordFeedback.textContent = feedback;
                        passwordFeedback.className = 'text-xs text-red-500 mt-1';
                    } else if (strength < 4) {
                        passwordStrength.style.width = '50%';
                        passwordStrength.style.backgroundColor = '#f59e0b';
                        passwordFeedback.textContent = feedback;
                        passwordFeedback.className = 'text-xs text-yellow-500 mt-1';
                    } else {
                        passwordStrength.style.width = '100%';
                        passwordStrength.style.backgroundColor = '#10b981';
                        passwordFeedback.textContent = 'Strong password';
                        passwordFeedback.className = 'text-xs text-green-500 mt-1';
                    }
                });
            }
            
            const form = document.getElementById('signup-form');
            const submitBtn = document.getElementById('submit-btn');
            
            if (form && submitBtn) {
                form.addEventListener('submit', function(e) {
                    const username = document.getElementById('username').value;
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
                    const fullName = document.getElementById('full_name').value;
                    const country = document.getElementById('country').value;
                    const countryCode = document.getElementById('country_code').value;
                    const termsCheckbox = document.querySelector('input[name="terms"]');
                    
                    let isValid = true;
                    let errorMessage = '';
                    
                    if (!username || !email || !password || !fullName || !country || !countryCode) {
                        isValid = false;
                        errorMessage = 'Please fill in all required fields';
                    } else if (password.length < 8) {
                        isValid = false;
                        errorMessage = 'Password must be at least 8 characters long';
                    } else if (!termsCheckbox.checked) {
                        isValid = false;
                        errorMessage = 'You must agree to the Terms of Service and Privacy Policy';
                    }
                    
                    if (!isValid) {
                        e.preventDefault();
                        const existingAlert = document.querySelector('.alert-error');
                        if (existingAlert) {
                            existingAlert.remove();
                        }
                        const alertDiv = document.createElement('div');
                        alertDiv.className = 'alert alert-error';
                        alertDiv.innerHTML = `
                            <div class="flex items-start">
                                <i class="fas fa-exclamation-circle mt-1 mr-3"></i>
                                <div>${errorMessage}</div>
                            </div>
                        `;
                        form.insertBefore(alertDiv, form.firstChild);
                        alertDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        return;
                    }
                    
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Creating Account...';
                });
            }
        });
