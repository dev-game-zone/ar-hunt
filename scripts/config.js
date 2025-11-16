const CONFIG = {
  BASE_PATH: window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost"
    ? "/"
    : "/ar-hunt/",   // Updated for new repo name
  SECRET_SALT: "YOUR_SECRET_SALT",
  CODE_LENGTH: 8,
  LETTER_MAP: {
    "QR001": "D",
    "QR002": "A",
    "QR003": "N",
    "QR004": "E",
    "QR005": "L",
    "QR006": "I",
    "QR007": "O",
    "QR008": "*",  // Wildcard - not part of hunt
    "QR009": "*",  // Wildcard - not part of hunt
    "QR010": "*"   // Wildcard - not part of hunt
  },
  HIDDEN_PHRASE: "DANDELION",
  ADMIN_SALT: "YOUR_ADMIN_SALT",
  ADMIN_PIN_LENGTH: 6
};
