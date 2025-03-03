import dotenv from "dotenv";
dotenv.config();
const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoose: {
    url: process.env.MONGO_URI + (process.env.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  logger: {
    info: {
      path: String(process.env.LOGGER_INFO_PATH)
    },
    err: {
      path: String(process.env.LOGGER_ERR_PATH)
    },
    war: {
      path: String(process.env.LOGGER_WAR_PATH)
    }
  },
  shopify: {
    apiKey: process.env.SHOPIFY_API_KEY,
    secretKey: process.env.SHOPIFY_SECRET_KEY,
    token: process.env.ADMIN_API_TOKEN,
    storeUrl: process.env.SHOPIFY_STORE_URL,
    storeName: process.env.SHOPIFY_STORE_NAME
  },
  jwt: {
    secret: String(process.env.JWT_SECRET),
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      signed: true,
    },
  },
  email: {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  },
  clientUrl: process.env.CLIENT_URL,
};

export default config;