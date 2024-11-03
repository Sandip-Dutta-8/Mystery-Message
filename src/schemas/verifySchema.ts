import { z } from "zod";

export const verifyschema = z.object({
    code: z.string().length(6, "code should be atleast 6 characters")
})