import type { Recipe } from "@/types";
import { createContext, useContext, useState } from "react";

export const RecipesContext = createContext<{
	recipes: Recipe[];
	addRecipe: (r: Recipe) => void;
}>({
	recipes: [],
	addRecipe: (newRecipe: Recipe) => {},
});

export const RecipesContextProvider = (props: {
	children: React.ReactNode;
}) => {
	const [recipes, setRecipes] = useState([
		{
			id: 1,
			title: "Crêpes",
			picture:
				"https://img.cuisineaz.com/660x495/2015/01/29/i113699-photo-de-crepe-facile.jpeg",
			timeMinutes: 5,
		},
		{
			id: 2,
			title: "Lasagnes",
			picture:
				"https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800cxt0cyt0cxb3732cyb5600.jpg",
			timeMinutes: 60,
		},
	]);

	const addRecipe = (newRecipe: Recipe) => {
		const newRecipes = [newRecipe, ...recipes];
		setRecipes(newRecipes);
	};

	return (
		<RecipesContext.Provider value={{ recipes, addRecipe }}>
			{props.children}
		</RecipesContext.Provider>
	);
};

export const useRecipes = () => useContext(RecipesContext);
