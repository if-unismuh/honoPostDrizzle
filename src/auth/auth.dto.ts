import { z } from "zod";

export const AuthDto = z.object({
  username: z.string().min(12),
  password: z.string(),
});
