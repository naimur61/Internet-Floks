import { Box, Button } from "@chakra-ui/react";
import React from "react";
import bg from "../../assets/home/Vector.png";
import Rectangle from "../../assets/home/Rectangle 400.png";
import Image from "next/image";

const Banner = () => {
	return (
		// <Box bg="red.400">Box 3</Box>
		<Box position="relative">
			<Box
				sx={{
					// position: "absolute",
					// zIndex: 1,
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
					zIndex: "-1",
					width: { sm: " 378px", lg: " 735px" },
					height: { sm: "413px", lg: "804px" },
					right: 0,
					top: "2px",
				}}
			>
				<Image src={Rectangle} alt="" />
			</Box>
			<Button
				colorScheme="white"
				variant="outline"
				size="sm"
				color="white"
				rounded="full"
				sx={{
					position: "absolute",
					zIndex: "3",
					right: "20px",
					top: "20px",
				}}
			>
				{" "}
				Get In Touch
			</Button>
		</Box>
	);
};

export default Banner;
