import convict from "convict";

const config = convict({
  server: {
    port: {
      doc: "Port of the server",
      format: "Number",
      default: 3000,
      env: "PORT",
    },
  },
  env: {
    doc: "The application environment.",
    format: ["production", "beta", "development"],
    default: "development",
    env: "NODE_ENV",
  },
});

config.validate();

export { config };
