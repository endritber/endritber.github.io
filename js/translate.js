// Helper function to load the translation data based on the selected language
function loadTranslation(language) {
  return fetch(`locales/${language}.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Error loading translation file for ${language}:`, error);
      return {};
    });
}

// Helper function to update the text content based on the loaded translation
function translateContent(translation) {
  Object.keys(translation).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translation[key];
    }
  });
}

// Function to handle language change
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

// Load the selected language from localStorage or default to English
const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
loadTranslation(selectedLanguage).then((translation) => {
  translateContent(translation);
});

// Add event listener to the parent element of the buttons
const navbar = document.getElementById("navbar");
navbar.addEventListener("click", handleLanguageChange);
