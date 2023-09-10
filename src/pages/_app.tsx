import type { AppContext, AppProps } from "next/app";
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css";
import { customTheme, darkTheme, lightTheme } from "@/theme";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// interface Props extends AppProps {
// 	theme: string;
// }

function App({ Component, pageProps, ...rest }: AppProps) {
	
	const [currentTheme, setCurrentTheme] = useState(lightTheme);

	useEffect(() => {
		const cookieTheme = Cookies.get("theme") || "light";

		const selectedTheme: Theme =
			cookieTheme === "light"
				? lightTheme
				: (cookieTheme === "dark")
				? darkTheme
				: customTheme;
		setCurrentTheme(selectedTheme);
	}, []);
	


	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

// App.getInitialProps = async (appContext: AppContext) => {
// 	const { theme } = appContext.ctx.req
// 		? (appContext.ctx.req as any).cookies
// 		: { theme: "dark" };

// 	const validThemes = ["light", "dark", "custom"];

// 	return {
// 		theme: validThemes.includes(theme) ? theme : "dark",
// 	};
// };

export default App;
