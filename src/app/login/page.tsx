import SocialButton from "@/components/Buttons/SocialButton";
import { FC } from "react";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = (props) => {
	return (
		<div>
			<div className="mt-6 p-6 bg-onPrimaryBg text-primaryBg m-auto rounded max-w-sm border flex flex-col items-center">
				<h1 className="my-4 mb-2 text-4xl font-bold text-center">
					Sign In
				</h1>

				<p className="text-center mb-6">
					Sign in to your account using one of the below sign-in options.
				</p>
				<SocialButton variant="google">Continue with Google</SocialButton>
			</div>
		</div>
	);
};

export default LoginPage;
