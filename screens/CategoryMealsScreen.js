import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextDefault from '../components/TextDefault';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {
    const category = props.navigation.getParam('category');
    const availableMeals = useSelector(store => store.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryids.indexOf(category.id) >= 0);
    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <TextDefault>No meals found here, maybe check your filters?</TextDefault>
            </View>
        );
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    }
});

export default CategoryMealsScreen;