import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeContextProviderComp } from "@/context/themeContext";
import ThemeMenuButton from "@/components/Buttons/ThemeMenuButton";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* <html lang="en" suppressHydrationWarning> */}
			<body className={raleway.className}>
				<ThemeContextProviderComp>
					<ThemeMenuButton />
					{children}
				</ThemeContextProviderComp>
			</body>
		</html>
	);
}
