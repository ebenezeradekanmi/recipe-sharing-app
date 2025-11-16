import { useRecipeStore } from "../recipeStore"; // updated import

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(recipeId)}>Delete</button>;
};

export default DeleteRecipeButton;
