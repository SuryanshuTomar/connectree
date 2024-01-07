import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeContextProviderComp } from "@/context/themeContext";
import ThemeMenuButton from "@/components/Buttons/ThemeMenuButton";
import Navbar from "@/components/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Connectree",
	description: "One Link for everything!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="no-scrollbar">
			{/* <html lang="en" suppressHydrationWarning> */}
			<body className={raleway.className}>
				<ThemeContextProviderComp>
					<ThemeMenuButton />
					<main className="h-screen bg-neutralBg text-onNeutralBg ">
						<Navbar />
						{children}
					</main>
				</ThemeContextProviderComp>
			</body>
		</html>
	);
}
