import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		primary: "#E23744",
	},
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#fff",
				color: "#444957",
			},
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
