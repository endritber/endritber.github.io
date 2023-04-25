// function to check if a cookie exists
function checkCookie(cookieName) {
  // retrieve all cookies and split into individual key-value pairs
  var cookies = document.cookie.split(';');
  // loop through all cookies
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    // check if the cookie matches the specified name and value
    if (cookie === 'accepted_cookies=true') {
      return true;
    }
  }
  return false;
}

// check if cookie exists
if (checkCookie('accepted_cookies=true')) {
  // cookie exists, do not show popup
  document.getElementById('cookie-popup').classList.add('hidden');
} else {
  // cookie does not exist, show popup
  document.getElementById('cookie-popup').classList.remove('hidden');
}

// function to set the cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function to handle the "Accept" button click
function acceptCookies() {
  // set the cookie
  setCookie('accepted_cookies', 'true', 30);
  // hide the cookie popup
  document.getElementById('cookie-popup').classList.add('hidden');
}

// function to handle the "Decline" button click
function declineCookies() {
  // set the cookie
  setCookie('accepted_cookies', 'false', 30);
  // hide the cookie popup
  document.getElementById('cookie-popup').classList.add('hidden');
}

// add click event listeners to buttons
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
document.getElementById('decline-cookies').addEventListener('click', declineCookies);
