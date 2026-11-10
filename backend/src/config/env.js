require("dotenv").config();

const { z } = require("zod");

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  PORT: z.coerce.number().int().positive().default(3000),

  APP_URL: z.string().url(),

  DATABASE_URL: z.string().min(1),

  SESSION_SECRET: z.string().min(32),

  JWT_SECRET: z.string().min(32),

  COOKIE_SECURE: z.enum(["true", "false"]).transform((value) => value === "true"),

  DEV_LOGIN: z.enum(["true", "false"]).transform((value) => value === "true"),

  ORCID_SANDBOX: z.enum(["true", "false"]).transform((value) => value === "true"),

  ORCID_CLIENT_ID: z.string().min(1),

  ORCID_CLIENT_SECRET: z.string().min(1),

  ORCID_CALLBACK_URL: z.string().url(),

  SMTP_HOST: z.string().optional().default(""),

  SMTP_PORT: z.coerce.number().optional().default(587),

  SMTP_USER: z.string().optional().default(""),

  SMTP_PASS: z.string().optional().default(""),

  MAIL_FROM: z.string().optional().default(""),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("\nGreška u konfiguraciji okoline (.env):");

  for (const issue of result.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  }

  console.error("\nProvjeri backend/.env datoteku.\n");

  process.exit(1);
}

const env = result.data;

if (env.NODE_ENV === "production") {
  if (!env.COOKIE_SECURE) {
    console.error("Greška: COOKIE_SECURE mora biti true u produkciji.");
    process.exit(1);
  }

  if (env.ORCID_SANDBOX) {
    console.error("Greška: ORCID_SANDBOX mora biti false u produkciji.");
    process.exit(1);
  }

  if (!env.APP_URL.startsWith("https://") || !env.ORCID_CALLBACK_URL.startsWith("https://")) {
    console.error("Greška: APP_URL i ORCID_CALLBACK_URL moraju koristiti HTTPS u produkciji.");
    process.exit(1);
  }
}

module.exports = env;
