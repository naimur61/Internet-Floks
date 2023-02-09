import { Box, Button, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Banner from "./Banner";

const Header = () => {
	return (
		<>
			<Stack direction={["column-reverse", "row"]} justifyContent="space-between">
				<Box bg="blue.400">Box 1</Box>
				<Banner />
			</Stack>
		</>
	);
};

export default Header;
