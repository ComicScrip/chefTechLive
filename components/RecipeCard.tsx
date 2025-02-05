import type { Recipe } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";

type RecipeCradProps = {
	recipe: Recipe;
};

export default function RecipeCard(props: RecipeCradProps) {
	const { recipe } = props;

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>{recipe.title}</Text>
			<Text>{recipe.timeMinutes} minutes</Text>
			<Image
				source={{
					uri: recipe.picture,
					headers: { Accept: "image/*" },
				}}
				style={{ width: 150, height: 150 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
		backgroundColor: "white",
		borderColor: "grey",
		borderWidth: 1,
		width: 170,
		alignItems: "center",
		marginVertical: 10,
	},
	title: {
		fontWeight: "bold",
	},
});
