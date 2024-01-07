"use client";

import { FC, useContext } from "react";
import Navbar from "../Navbar";
import JoinForm from "../Forms/JoinForm";
import { ThemeContext } from "@/context/themeContext";
import Loader from "../Loader";

interface HomepageProps {}

const Homepage: FC<HomepageProps> = (props) => {
	const { loading } = useContext(ThemeContext);

	const content = loading ? (
		<Loader />
	) : (
		<>
			<Navbar />
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
		</>
	);

	return content;
};

export default Homepage;
