function loadTranslation(language) {
  return fetch(`locales/${language}.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Error loading translation file for ${language}:`, error);
      return {};
    });
}

function translateContent(translation) {
  Object.keys(translation).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translation[key];
    }
  });
}

function initializeHomePage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "de";
  loadTranslation(selectedLanguage).then((translation) => {
    setTimeout(() => {
      translateContent(translation);
    }, 0);
  });
}

function initializeAboutPage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "de";
  loadTranslation(selectedLanguage).then((translation) => {
    setTimeout(() => {
      translateContent(translation);
    }, 0);
  });
}

function handleLanguageChange(event) {
  const target = event.target;
  if (target.id === "german-btn") {
    loadTranslation("de").then((translation) => {
      setTimeout(() => {
        translateContent(translation);
        localStorage.setItem("selectedLanguage", "de");
      }, 0);
    });
  } else if (target.id === "english-btn") {
    loadTranslation("en").then((translation) => {
      setTimeout(() => {
        translateContent(translation);
        localStorage.setItem("selectedLanguage", "en");
      }, 0);
    });
  }
}

// Home Page Initialization
if (document.body.classList.contains("home-page")) {
  initializeHomePage();
}

// About Page Initialization
if (document.body.classList.contains("about-page")) {
  initializeAboutPage();
}

const navbar = document.getElementById("navbar");
navbar.addEventListener("click", handleLanguageChange);