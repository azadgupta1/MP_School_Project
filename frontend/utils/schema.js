// import { boolean } from 'drizzle-orm/mysql-core';
// import { pgTable, varchar, integer, int, serial } from 'drizzle-orm/pg-core';  // Import PostgreSQL-specific schema helpers

// // Define your table schema
// export const GRADES=pgTable('grades', {
//     id: serial('id').primaryKey(),   // 'serial' is used for auto-incrementing primary keys in PostgreSQL
//     grade: varchar('grade', { length: 10 }).notNull()  // 'varchar' for a variable-length string field
// });

// export const STUDENTS=pgTable('students', {
//     id: serial('id').primaryKey(),
//     name:varchar('name',{length:20}).notNull(),
//     grade:varchar('grade',{length:10}).notNull(),
//     address:varchar('address',{length:50}),
//     contact:varchar('contact',{length:11}),
// });

// export const ATTENDANCE=pgTable('attendance',{
//     id: serial('id',{length:11}).primaryKey(),
//     studentId:integer('studentId',{length:11}).notNull(),
//     present:boolean('present').default(false),
//     day:integer('day',{length:11}).notNull,
//     date:varchar('date',{length:20}).notNull()
// })

// Import PostgreSQL-specific schema helpers
import { pgTable, varchar, integer, serial, boolean } from 'drizzle-orm/pg-core';  

// Define your table schema
export const GRADES = pgTable('grades', {
    id: serial('id').primaryKey(),   // 'serial' is used for auto-incrementing primary keys in PostgreSQL
    grade: varchar('grade', { length: 10 }).notNull()  // 'varchar' for a variable-length string field
});

export const STUDENTS = pgTable('students', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 20 }).notNull(),
    grade: varchar('grade', { length: 10 }).notNull(),
    address: varchar('address', { length: 50 }),
    contact: varchar('contact', { length: 11 })
});

export const ATTENDANCE = pgTable('attendance', {
    id: serial('id').primaryKey(),
    studentId: integer('studentId').notNull(),
    present: boolean('present').default(false),
    day: integer('day').notNull(),   // Add () to invoke the notNull function correctly
    date: varchar('date', { length: 20 }).notNull()
});
