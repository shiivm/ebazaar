if (!(process.env.NODE_ENV && process.env.NODE_ENV == "production")) {
  require("dotenv").config();
}
const { BASE_URL = "", STATIC_PATH = "" } = process.env;

const config = {
  BASE_URL: BASE_URL,
  STATIC_PATH: BASE_URL + STATIC_PATH,
};

export default config;
