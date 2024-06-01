import { useTheme as useNextTheme } from 'next-themes';

const appThemes = {
	light: 'light',
	dark: 'dark',
} as const;

export const useTheme = () => {
	const { setTheme, theme } = useNextTheme();

	const setLightTheme = () => {
		setTheme(appThemes['light']);
	};

	const setDarkTheme = () => {
		setTheme(appThemes['dark']);
	};

	const toggleTheme = () => {
		setTheme(theme === appThemes['light'] ? 'dark' : 'light');
	};

	return {
		theme: theme as keyof typeof appThemes,
		setLightTheme,
		setDarkTheme,
		toggleTheme,
	};
};
