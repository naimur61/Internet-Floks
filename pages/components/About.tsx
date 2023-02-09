import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Box sx={{ position: "relative", border: "2px solid red", w: "fit-content", p: "20px" }}>
			<Text>hlw</Text>
			<Box sx={{ bg: "green", h: "15px", w: "15px", position: "absolute", top: "10px", zIndex: 2 }}></Box>
			<Box sx={{ bg: "black", h: "15px", w: "15px", position: "absolute", top: "2px" }}></Box>
		</Box>
	);
};

export default About;
