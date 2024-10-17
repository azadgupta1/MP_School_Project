import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql',  // Ensure this matches your database
    schema: './utils/schema.js',  // Path to your schema.js
    out: './drizzle',  // Directory for migrations
    dbCredentials: {
        host: 'localhost',               // Your database host
        user: 'postgres',                 // Your database user
        password: '@23az68ad20',        // Your database password
        database: 'Attendance',           // Your database name
        port: 5432,                       // Your database port (default for PostgreSQL)
    }
});
