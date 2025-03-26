// Function to set cookies
function setCookie(name, value, days = 1) {
  let expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get cookies
function getCookie(name) {
  let cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
      let [key, value] = cookie.split('=');
      if (key === name) return value;
  }
  return null;
}

// Function to save username & password in cookies
function saveUser(event) {
  event.preventDefault();  // Prevent form submission reload
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Store in cookies
  setCookie('username', username);
  setCookie('password', password);

  // Redirect to next page
  window.location.href = 'page2.html';
}

// Function to display username on page2
window.onload = function () {
  let user = getCookie('username');
  if (user && document.getElementById('welcomeMessage')) {
      document.getElementById('welcomeMessage').innerText = `Welcome, ${user}!`;
  }
};

// Function to clear cookies and logout
function logout() {
  setCookie('username', '', -1); // Expire the cookie
  setCookie('password', '', -1);
  window.location.href = 'index.html'; // Redirect back to login
}
