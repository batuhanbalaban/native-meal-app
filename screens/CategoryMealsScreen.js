import React from 'react';
// import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {
    const category = props.navigation.getParam('category');
    const availableMeals = useSelector(store => store.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryids.indexOf(category.id) >= 0);
    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title,
    };
};

export default CategoryMealsScreen;