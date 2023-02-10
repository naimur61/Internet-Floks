import { Box, HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../assets/home/Screenshot_669 1.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
	return (
		<Stack
			gap={5}
			direction={["column", "row"]}
			justifyContent="space-between"
			py="3rem"
			px="3rem"
			bg="#E5E5E5"
		>
			<Box width="10.062rem" height="7.812rem" mx={["auto", 0]}>
				<Image src={logo} alt="" />
			</Box>

			<Box>
				<Text fontSize="1.125rem" color="#0E2368" fontWeight="bold">
					Contact Us
				</Text>
				<Text>
					Lorem Ipsum Pvt Ltd.5/1, Magalton <br /> Road, Phartosh Gate near YTM <br /> Market, XYZ-343434{" "}
				</Text>
				<Text mt="7px">example2020@gmail.com</Text>
				<Text mt="7px">(904) 443-0343</Text>
			</Box>

			<Box>
				<Text fontSize="1.125rem" color="#0E2368" fontWeight="bold">
					More
				</Text>
				<List>
					<ListItem mt="10px">About</ListItem>
					<ListItem mt="10px">Products</ListItem>
					<ListItem mt="10px">Career</ListItem>
					<ListItem mt="10px">Contact Us</ListItem>
				</List>
			</Box>

			<Stack direction={["column-reverse", "column"]} gap={[5, 20]}>
				<Box>
					<Text
						fontSize="1.125rem"
						color="#0E2368"
						fontWeight="bold"
						display={["none", "block"]}
						align="center"
						mb={3}
					>
						Social Links{" "}
					</Text>
					<HStack
						color="#0E2368"
						justifyContent={["center", "end"]}
						alignItems="center"
						fontSize="x-large"
						gap={3}
					>
						<AiFillInstagram />
						<BsTwitter />
						<FaFacebookF />
					</HStack>
				</Box>
				<Text fontSize="0.915rem" color="#828B9C" textAlign="center">
					© 2022 Food Truck Example
				</Text>
			</Stack>
		</Stack>
	);
};

export default Footer;
