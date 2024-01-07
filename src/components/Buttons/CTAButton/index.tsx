import { FC, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
}

const Button: FC<ButtonProps> = ({
	size = "medium",
	variant = "primary",
	className,
	children,
	...rest
}) => {
	let buttonClasses = " font-semibold";
	if (variant === "primary") {
		buttonClasses = ` bg-primaryBg text-onPrimaryBg hover:shadow hover:shadow-neutral-100 hover:text-neutral-100`;
	} else {
		buttonClasses = ` bg-neutralBg text-onNeutralBg hover:shadow hover:shadow-primary hover:text-primary`;
	}

	if (size === "small") {
		buttonClasses += ` p-1 text-sm rounded`;
	} else if (size === "medium") {
		buttonClasses += ` p-2 rounded-lg`;
	} else {
		buttonClasses += ` p-3 text-lg rounded-lg`;
	}

	buttonClasses += ` ${className}`;

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	);
};

export default Button;
