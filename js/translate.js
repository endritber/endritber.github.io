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

function handleLanguageChange(event) {
  const target = event.target;
  if (target.id === "german-btn") {
    loadTranslation("de").then((translation) => {
      translateContent(translation);
      localStorage.setItem("selectedLanguage", "de");
    });
  } else if (target.id === "english-btn") {
    loadTranslation("en").then((translation) => {
      translateContent(translation);
      localStorage.setItem("selectedLanguage", "en");
    });
  }
}

const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
loadTranslation(selectedLanguage).then((translation) => {
  translateContent(translation);
});

const navbar = document.getElementById("navbar");
navbar.addEventListener("click", handleLanguageChange);
