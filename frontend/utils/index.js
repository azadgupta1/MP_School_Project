import { drizzle } from 'drizzle-orm/postgres-js';  // Import Drizzle ORM for PostgreSQL
import postgres from 'postgres';  // Import the postgres client

// Initialize the postgres client using the connection string from environment variables
const queryClient = postgres(process.env.DATABASE_URL);

// Create a Drizzle instance by passing the queryClient
const db = drizzle(queryClient);

// Export the db instance to use it in other parts of the project
export default db; 
