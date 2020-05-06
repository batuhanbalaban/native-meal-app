import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE,SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealid);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealid);
                const newFavList = state.favoriteMeals.concat(meal)
                return { ...state, favoriteMeals: newFavList };
            }
        case SET_FILTERS:
            const filteredMeals = state.meals.filter(meal=> {
                if(action.filters.isGlutenFree && !meal.isGlutenFree){return false;}
                if(action.filters.isLactoseFree && !meal.isLactoseFree){return false;}
                if(action.filters.isVegan && !meal.isVegan){return false;}
                if(action.filters.isVegetarian && !meal.isVegetarian){return false;}
                return true;
            });
            return { ...state, filteredMeals: filteredMeals };
        default:
            return state;
    }
}

export default mealsReducer;