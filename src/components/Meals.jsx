import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const{data:loadedmeals,isLoading,error}=useHttp('http://localhost:3000/meals', requestConfig, []);
  if(isLoading){
    return <p className="center">Loading...</p>
  }
  if(error){
    return <Error title="Failed to fetch meals" message={error} />
  }
  
  return (
    <ul id="meals">
      {loadedmeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
