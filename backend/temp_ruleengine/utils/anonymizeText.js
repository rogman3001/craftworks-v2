
function anonymizeText(text) {
  return text
    .replace(/([A-ZÄÖÜ][a-zäöüß]+\s[A-ZÄÖÜ][a-zäöüß]+)/g, '***NAME***')
    .replace(/\b(\d{5})\b/g, '*****')
    .replace(/(\b\w+straße\b|\b\w+weg\b|\b\w+allee\b)/gi, '***STRASSE***')
    .replace(/(\+?\d{2,4}[-.\s]?\d{3,})/g, '***TEL***');
}

module.exports = { anonymizeText };
