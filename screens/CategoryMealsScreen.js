import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const category = props.navigation.getParam('category');
    const displayedMeals = MEALS.filter(meal => meal.categoryids.indexOf(category.id) >= 0)

    const renderMealItem = itemData => {
        return (
            <MealItem
                item={itemData.item}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: { meal: itemData.item }
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />

        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title,
    };
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
});

export default CategoryMealsScreen;