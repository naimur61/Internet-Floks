import { Box, Button, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import bg from "../../assets/home/Vector.png";
import Rectangle from "../../assets/home/Rectangle 400.png";

const Header = () => {
	const isNotSmallScreen = useMediaQuery("(min-width:600px");

	return (
		<>
			<Flex justifyContent="space-between" className="header">
				<Box bg="blue.400" zIndex={5}>
					Box 3
				</Box>
				{/* <Box bg="red.400">Box 1</Box> */}

				<Box position="relative" display="block">
					<Box
						sx={{
							position: "absolute",
							zIndex: 1,
							width: { sm: " 375px", lg: " 752px" },
							height: { sm: "426px", lg: "849px" },
							right: 0,
							top: " 0px",
						}}
					>
						<Image src={bg} alt="" />
					</Box>
					<Box
						sx={{
							position: "absolute",
							zIndex: "auto",
							width: { sm: " 378px", lg: " 735px" },
							height: { sm: "413px", lg: "804px" },
							right: 0,
							top: { sm: "-2px", lg: "2px" },
						}}
					>
						<Image src={Rectangle} alt="" />
					</Box>
					<Button
						colorScheme="white"
						size="xs"
						sx={{
							position: "absolute",
							zIndex: "3",
							right: "20px",
							top: "20px",
							p: "15px",
							border: "2px solid white",
							rounded: 20,
						}}
					>
						{" "}
						Get In Touch
					</Button>
				</Box>
			</Flex>
		</>
	);
};

export default Header;
