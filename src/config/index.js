import { config } from "dotenv";

config();

export default {
  url: process.env.APP_URL || "http://localhost:5000",
  port: process.env.PORT || 5000,
  environment: process.env.NODE_ENV || "development",

  database: {
    dbHost: process.env.DB_HOST || "",
    dbName: process.env.DB_NAME || "",
    dbUser: process.env.DB_USER || "",
    dbPass: process.env.DB_PASS || "",
  },
  jwtSecret: process.env.JWT_SECRET || "OHMSWICH",
  development: process.env.NODE_ENV === "development",
  production: process.env.NODE_ENV === "production",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
};
