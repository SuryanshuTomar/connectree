import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
	return (
		<header className="text-lg flex justify-between p-4 font-bold bg-primaryBg text-onPrimaryBg">
			<div className="flex gap-6 items-center">
				<Link href={"/"} className="text-primary text-xl">
					<span className="text-onNeutralBg bg-primary px-2 py-1 rounded-full">
						C
					</span>
					onnectree
				</Link>

				<nav className="flex items-center gap-4 font-normal">
					<Link href={"/about"}>About</Link>
					<Link href={"/pricing"}>Pricing</Link>
					<Link href={"/contact"}>Contact</Link>
				</nav>
			</div>

			<nav className="flex gap-4 items-center">
				<Link href={"/login"}>Login</Link>
				<Link href={"/register"}>Create Account</Link>
			</nav>
		</header>
	);
};

export default Navbar;
