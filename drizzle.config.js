import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:C4vntyXLGZf8@ep-curly-night-a1c0bt18.ap-southeast-1.aws.neon.tech/NeuroForms?sslmode=require"
    ,
  }
});