import { StyleSheet, ScrollView, Text } from "react-native";

const styles = StyleSheet.create({
	mainContainer: {
		padding: 20,
	},
	text: {
		color: "red",
	},
});

export default function CreateRecipeScreen() {
	return (
		<ScrollView style={styles.mainContainer}>
			<Text>Ecran creation recette</Text>
		</ScrollView>
	);
}
