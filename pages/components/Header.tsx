import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Banner from "./Banner";
import logo from "../../assets/home/Screenshot_669 1.png";

const Header = () => {
	return (
		<>
			<Stack direction={["column-reverse", "row"]} justifyContent="space-between">
				<Box width="21.6rem" mx={["auto", "6.25rem"]} mt="2rem" textAlign={["center", "left"]}>
					<Box width="107px" height="83px" display={["none", "block"]}>
						<Image src={logo} alt="" />
					</Box>
					<Text fontSize="3.9rem" mt="5.25rem" lineHeight="3.9rem" fontWeight="extrabold" color="#0E2368">
						Discover the{" "}
						<Text color="#E23744" display="inline">
							Best
						</Text>{" "}
						Food and Drinks
					</Text>
					<Text my="2.2rem">
						Naturally made Healthcare Products for the better care & support of your body.
					</Text>
					<Button colorScheme="red" rounded="full">
						Explore Now!
					</Button>
				</Box>
				<Banner />
			</Stack>
		</>
	);
};

export default Header;
