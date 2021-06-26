import { useState, useEffect } from "react";

export default function useDarkMode() {
	const [theme, setTheme] = useState("light");
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === "light" ? setMode("dark") : setMode("light");
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
		setMountedComponent(true);
	}, []);

	return [theme, themeToggler, mountedComponent];
}