import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, serial, varchar, pgEnum} from "drizzle-orm/pg-core";


export const ROLE_ENUM = pgEnum('role', ['admin', 'user'])

export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    name: text("name"),
    email:varchar('email', {length:200}).notNull(),
    password:varchar('password', {length:100}).notNull(),
    role:ROLE_ENUM('role').notNull().default('user')
});

