import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import about from "../../assets/about/pharmasict-serving-customer-drug-store 1.png";

const About = () => {
	return (
		<Box bg="#F0F1F7" py={["5.8rem", 0]} mt={["4.25rem", "6.5rem"]}>
			<Stack
				direction={["column", "row"]}
				justifyContent="space-around"
				alignItems="center"
				mx={["auto", "12.8rem"]}
			>
				<Box display={["none", "block"]}>
					<Image src={about} alt="" width={384} height={512} />
				</Box>

				<Box width={["17rem", "28rem"]} mx={["auto", 0]} textAlign={["center", "left"]}>
					<Text fontSize="3.9rem" fontWeight="extrabold" color="#0E2368">
						About Us
					</Text>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel quisquam necessitatibus
						tempore! Quas quasi, tenetur, fuga ducimus facilis harum placeat molestias vel suscipit rem
						officiis necessitatibus repellendus ad obcaecati.
					</Text>
					<Button colorScheme="red" rounded="full" size="sm" mt="1rem">
						Read More
					</Button>
				</Box>
			</Stack>
		</Box>
	);
};

export default About;
