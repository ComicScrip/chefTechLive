import RecipeCard from "@/components/RecipeCard";
import type { Recipe } from "@/types";
import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";

const styles = StyleSheet.create({
	mainContainer: {
		padding: 20,
		alignItems: "center",
	},
	text: {
		color: "red",
	},
});

export default function HomeScreen() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	useEffect(() => {
		fetch("https://chef-tech-api.vercel.app/api/recipes")
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<View style={styles.mainContainer}>
			<FlatList
				data={recipes}
				renderItem={({ item }) => <RecipeCard recipe={item} />}
				keyExtractor={(item) => item.title}
			/>
		</View>
	);
}
