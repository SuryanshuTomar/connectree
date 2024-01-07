"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Buttons/CTAButton";
import { JoinFormType, joinFormSchema } from "@/utils/schemas";

interface JoinFormProps {}

const JoinForm: FC<JoinFormProps> = (props) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<JoinFormType>({
		resolver: zodResolver(joinFormSchema),
	});

	const onSubmitHandler: SubmitHandler<JoinFormType> = (data) => {
		console.log("Data: ", data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmitHandler)}
			className="flex md:items-center flex-col md:flex-row"
		>
			<div className="flex flex-col md:flex-row">
				<span className="mx-2 mt-2 md:mt-0 bg-white text-primary pr-4 rounded pl-4 py-2 md:rounded-l">
					connectree.io/
					<label htmlFor="username">
						<input
							type="text"
							id="username"
							placeholder="username"
							{...register("username")}
							className="pr-2 py-2 rounded-r text-primary placeholder:text-primary"
						/>
					</label>
				</span>
				<Button variant="primary" className="mx-2 mt-2 md:mt-0">
					Join for Free
				</Button>
			</div>
			<p className="text-red-500 font-semibold mx-2 mt-2 md:mt-0">
				{errors.username?.message}
			</p>
		</form>
	);
};

export default JoinForm;
