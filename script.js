// Store users in memory
let users = [];

// Show login form
function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
    hideMessage();
}

// Show signup form
function showSignup() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    hideMessage();
}

// Tab click handlers
document.getElementById('loginTab').addEventListener('click', showLogin);
document.getElementById('signupTab').addEventListener('click', showSignup);

// Handle signup
function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        showMessage('User already exists! Please login.', false);
        return;
    }

    // Add new user
    users.push({ name, email, password });
    console.log('New user registered:', { name, email });
    console.log('All users:', users);

    showMessage(`Account created successfully! Welcome, ${name}!`, true);

    // Clear form
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
}

// Handle login
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        console.log('Login successful:', { email });
        showMessage(`Welcome back, ${user.name}!`, true);

        // Clear form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    } else {
        showMessage('Invalid email or password!', false);
    }
}

// Show success/error message
function showMessage(text, isSuccess) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add('show', isSuccess ? 'success' : 'error');
}

// Hide message
function hideMessage() {
    document.getElementById('message').classList.remove('show');
}