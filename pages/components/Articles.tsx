import { Box, Button, Card, CardBody, color, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import grile from "../../assets/articels/grilled-tomatoes-1-846x846 1.png";
import snacks from "../../assets/articels/snakcks.png";
import post_work from "../../assets/articels/post-workout.png";
import corn from "../../assets/articels/corn.png";
import suspense from "../../assets/articels/suprem.png";
import soup from "../../assets/articels/meal-prep-ideas-846x846 1 (3).png";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Articles = () => {
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(3);

	const setNumber = (f: number, s: number) => {
		setFirst(f);
		setSecond(s);
	};

	return (
		<Box mt={["9.9rem"]} pl="6.2" mb="5rem" mx={["auto", "4rem"]} px="1rem">
			<Text
				fontSize={["1.7rem", "3.9rem"]}
				fontWeight="extrabold"
				color="#0E2368"
				textAlign={["center", "left"]}
				mb={["1.4rem", "2.562rem"]}
			>
				Latest Articles{" "}
			</Text>

			<Stack
				direction={["column", "row"]}
				justifyContent="space-between"
				alignContent="center"
				alignItems="center"
				gap={5}
			>
				{jsonApi.slice(first, second).map((data, i) => (
					<Card
						size="sm"
						p="1.687rem"
						key={i}
						width={["16.937rem", "23.812rem"]}
						height={["30.187rem", "34.625rem"]}
						variant="outline"
						rounded="1.312rem"
					>
						<Image src={data?.img} alt="" width={326} height={257} />
						<CardBody mt="2.125rem">
							<Text>{data?.head}</Text>
							<Text>{data?.body}</Text>
							<Button variant="outline" rounded="full" mt="1.687rem" color="#424961" colorScheme="#424961">
								Read More
							</Button>
						</CardBody>
					</Card>
				))}
			</Stack>

			<HStack mt="4rem" alignItems="center" justifyContent="center">
				<Button
					size="xs"
					variant="outline"
					color="#424961"
					colorScheme="#424961"
					onClick={() => setNumber(0, 3)}
					px={0}
					isDisabled={first == 0 ? true : false}
				>
					<ChevronLeftIcon fontSize="1.2rem" />
				</Button>

				<Text onClick={() => setNumber(0, 3)} fontWeight="bold" cursor="pointer">
					1
				</Text>
				<Text fontWeight="bold">/</Text>
				<Text onClick={() => setNumber(3, 6)} fontWeight="bold" cursor="pointer">
					2
				</Text>

				<Button
					size="xs"
					variant="outline"
					color="#424961"
					colorScheme="#424961"
					onClick={() => setNumber(3, 6)}
					px={0}
					isDisabled={second == jsonApi.length ? true : false}
				>
					<ChevronRightIcon fontSize="1.2rem" />
				</Button>
			</HStack>
		</Box>
	);
};

export default Articles;

const jsonApi = [
	{
		img: grile,
		head: "Grilled  Tomatoes at Home",
		body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
	},
	{
		img: snacks,
		head: "Snacks for Travel",
		body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
	},
	{
		img: post_work,
		head: "Post-workout Recipes",
		body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
	},
	{
		img: corn,
		head: " How To Grill Corn",
		body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
	},
	{
		img: suspense,
		head: "Crunchwrap Supreme",
		body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
	},
	{
		img: soup,
		head: "Broccoli Cheese Soup",
		body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
	},
];
