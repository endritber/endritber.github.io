function cookiesExists() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie === 'accepted_cookies=true') {
      return true;
    }
  }
  return false;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function acceptCookies() {
  setCookie('accepted_cookies', 'true', 30);
  document.getElementById('cookie-popup').classList.add('hidden');
}

function declineCookies() {
  setCookie('accepted_cookies', 'false', 30);
  document.getElementById('cookie-popup').classList.add('hidden');
}

if (cookiesExists()) {
  document.getElementById('cookie-popup').classList.add('hidden');
} else {
  document.getElementById('cookie-popup').classList.remove('hidden');
}

document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
document.getElementById('decline-cookies').addEventListener('click', declineCookies);
