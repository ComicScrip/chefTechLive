import { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

export default function RecipeForm() {
	const [title, setTitle] = useState("");
	const [timeMinutes, setTimeMinutes] = useState("");
	const [picture, setPicture] = useState("");

	return (
		<View>
			<Text>Title</Text>
			<TextInput
				style={styles.input}
				onChangeText={(newValue) => setTitle(newValue)}
				value={title}
			/>

			<Text>Picture</Text>
			<TextInput
				style={styles.input}
				onChangeText={(newValue) => setPicture(newValue)}
				value={picture}
			/>

			<Text>Time (minutes)</Text>
			<TextInput
				style={styles.input}
				onChangeText={(newValue) => setTimeMinutes(newValue)}
				value={timeMinutes}
				keyboardType="number-pad"
			/>

			<Button
				title="envoyer"
				onPress={() =>
					alert(
						JSON.stringify({
							title,
							picture,
							timeMinutes: Number.parseInt(timeMinutes, 10),
						}),
					)
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "grey",
		marginVertical: 10,
		padding: 10,
	},
});
