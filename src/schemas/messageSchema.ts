import { z } from "zod";

export const messagesSchema = z.object({
    content: z.string().min(5, {message: "atleast 6 characters"}).max(300, {message: 'No longer than 300 characters'}),
    createdAt: z.date()
})