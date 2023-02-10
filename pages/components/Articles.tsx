import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
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
		<Box mt={["9.9rem"]} pl="6.2">
			<Text fontSize="3.9rem" fontWeight="extrabold" color="#0E2368">
				Latest Articles{" "}
			</Text>

			<Stack direction={["column", "row"]}>
				{jsonApi.map((data, i) => (
					<Card size="sm" p={27} key={i}>
						<Image src={data?.img} alt="" width={326} height={257} />
						<CardBody>
							<Text>{data?.head}</Text>
							<Text>{data?.body}</Text>
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
