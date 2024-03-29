import styles from "./index.module.css";

const Loader = () => {
	return (
		<div className="bg-neutralBg text-onNeutralBg w-screen h-screen flex justify-center items-center">
			<div className={styles.loader}></div>
		</div>
	);
};

export default Loader;
