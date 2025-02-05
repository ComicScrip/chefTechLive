import Counter from "@/components/Counter";
import RecipeCard from "@/components/RecipeCard";
import type { Recipe } from "@/types";
import { useState } from "react";
import { StyleSheet, ScrollView, Button, FlatList } from "react-native";

const styles = StyleSheet.create({
	mainContainer: {
		padding: 20,
	},
	text: {
		color: "red",
	},
});

export default function HomeScreen() {
	const [recipes, setRecipes] = useState([
		{
			title: "Crêpes",
			picture:
				"https://img.cuisineaz.com/660x495/2015/01/29/i113699-photo-de-crepe-facile.jpeg",
			timeMinutes: 5,
		},
		{
			title: "Lasagnes",
			picture:
				"https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800cxt0cyt0cxb3732cyb5600.jpg",
			timeMinutes: 60,
		},
	]);

	const addRecipe = () => {
		const newRecipe: Recipe = {
			title: "hachis parmentier",
			picture:
				"https://assets.afcdn.com/recipe/20170303/61626_w1024h1024c1cx1296cy1944.webp",
			timeMinutes: 90,
		};

		const newRecipes = [newRecipe, ...recipes];
		setRecipes(newRecipes);
	};

	return (
		<ScrollView style={styles.mainContainer}>
			<Counter />
			<Counter />
			<FlatList
				data={recipes}
				renderItem={({ item }) => <RecipeCard recipe={item} />}
				keyExtractor={(item) => item.title}
			/>
		</ScrollView>
	);
}
