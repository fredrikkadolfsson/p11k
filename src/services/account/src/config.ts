/* eslint-disable prettier/prettier */
type configType = {
  PORT: string;
};

const config: configType = {
  PORT: process.env.ENABLE_TRACING ?? "4001",
};

export default config;
