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

function initializePage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "de";
  loadTranslation(selectedLanguage).then((translation) => {
    setTimeout(() => {
      translateContent(translation);
    }, 1);
  });
}

function handleLanguageChange(event) {
  const target = event.target;
  if (target.id === "german-btn") {
    loadTranslation("de").then((translation) => {
      setTimeout(() => {
        translateContent(translation);
        localStorage.setItem("selectedLanguage", "de");
      }, 1);
    });
  } else if (target.id === "english-btn") {
    loadTranslation("en").then((translation) => {
      setTimeout(() => {
        translateContent(translation);
        localStorage.setItem("selectedLanguage", "en");
      }, 1);
    });
  }
}

// Home Page Initialization
if (document.body.classList.contains("home-page")) {
  initializePage();
}

// About Page Initialization
if (document.body.classList.contains("about-page")) {
  initializePage();
}

// Sercvies Page Initialization
if (document.body.classList.contains("services-page")) {
  initializePage();
}

// Contact Page Initialization
if (document.body.classList.contains("contact-page")) {
  initializePage();
}

const navbar = document.getElementById("navbar");
navbar.addEventListener("click", handleLanguageChange);