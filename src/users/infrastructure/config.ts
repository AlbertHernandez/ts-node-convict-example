import "dotenv/config";

const config = {
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  env: process.env.NODE_ENV || "development",
};

export { config };
