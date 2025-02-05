import { createContext, useContext, useState } from "react";

export const CounterContext = createContext({
	count: 0,
	setCount: (count: number) => {},
});

export const CounterContextProvider = (props: {
	children: React.ReactNode;
}) => {
	const [count, setCount] = useState(0);

	return (
		<CounterContext.Provider value={{ count, setCount }}>
			{props.children}
		</CounterContext.Provider>
	);
};

export const useCounter = () => useContext(CounterContext);
