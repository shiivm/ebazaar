const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL + ":" + PORT || "";
const STATIC_PATH = process.env.STATIC_PATH || "";
const IMAGE_PATH = process.env.IMAGE_PATH || "";

const config = {
  BASE_URL: BASE_URL,
  STATIC_PATH: BASE_URL + STATIC_PATH,
  IMAGE_PATH: BASE_URL + STATIC_PATH + IMAGE_PATH,
};

export default config;
