"use client";

import { FC } from "react";
import JoinForm from "../Forms/JoinForm";

interface HomepageProps {}

const Homepage: FC<HomepageProps> = (props) => {
	return (
		<section className="p-4 w-full flex flex-col items-center justify-center mt-36">
			<div className="w-full flex flex-col items-center mb-8">
				<h1 className="text-4xl md:text-6xl font-bold mb-6">
					One Link for every{" "}
					<span className="text-primary capitalize">connect.</span>
				</h1>
				<h2 className=" md:text-xl">
					Share your links, social profiles, contact info and more in a
					single go!
				</h2>
			</div>

			<JoinForm />
		</section>
	);
};

export default Homepage;
