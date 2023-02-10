import { Box, Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import grile from "../../assets/articels/grilled-tomatoes-1-846x846 1.png";
import snacks from "../../assets/articels/snakcks.png";
import post_work from "../../assets/articels/post-workout.png";
import corn from "../../assets/articels/corn.png";
import suspense from "../../assets/articels/suprem.png";
import soup from "../../assets/articels/meal-prep-ideas-846x846 1 (3).png";
import Image from "next/image";

const Articles = () => {
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

			<Stack direction={["column", "row"]} justifyContent="space-between" gap={5}>
				{jsonApi.slice(0, 3).map((data, i) => (
					<Card
						size="sm"
						p="1.687rem"
						key={i}
						width="23.812rem"
						height="34.625rem"
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
