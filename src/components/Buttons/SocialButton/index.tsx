import { getSvg } from "@/utils/svg";
import { FC, ReactNode } from "react";

interface SocialButtonProps {
	children?: ReactNode;
	variant?: SocialMediaTypes;
}

const SocialButton: FC<SocialButtonProps> = ({ children, variant }) => {
	const renderSvg = getSvg(variant);

	return (
		<button className="flex items-center bg-primaryBg border border-neutralBg rounded-lg shadow-md px-6 py-2 text-sm font-medium text-onPrimaryBg hover:bg-primary focus:outline-none">
			{renderSvg}
			<span>{children}</span>
		</button>
	);
};
export default SocialButton;
