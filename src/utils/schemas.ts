import { z } from "zod";

export const joinFormSchema = z.object({
	username: z
		.string()
		.min(2, { message: "username cannot be less than 2 characters!" })
		.max(25, { message: "username cannot be more than 25 characters!" }),
});

export type JoinFormType = z.infer<typeof joinFormSchema>;
