interface Env {
  PORT: number;
  MONGOURL: string;
  JWT_SECRET: string;
}

export const {
  PORT = 3000,
  MONGOURL = "",
  JWT_SECRET = "",
} = process.env as unknown as Env;
if (!PORT || !MONGOURL || !JWT_SECRET) throw new Error("Missing Env Variables");
