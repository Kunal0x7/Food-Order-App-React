import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem";
const requestConfig = {};
export default function Meals() {
  const{data:loadedmeals,isLoading,error}=useHttp('http://localhost:3000/meals', requestConfig, []);
  
  return (
    <ul id="meals">
      {loadedmeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
