import { useCounter } from "@/hooks/useCounter";
import { Button, Text, View } from "react-native";

export default function Counter() {
	const { count, setCount } = useCounter();

	return (
		<View>
			<Text>{count}</Text>
			<Button onPress={() => setCount(count + 1)} title="+1" />
		</View>
	);
}
