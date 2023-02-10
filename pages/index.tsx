import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<Box sx={{ maxWidth: "1440px", mx: "auto" }}>
			<Header />
			<About />
			<Articles />
			<Footer />
		</Box>
	);
}
