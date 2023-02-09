import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<h1>hello</h1>
			<Button colorScheme="red" size="sm">
				Red
			</Button>{" "}
		</>
	);
}
