import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = props => {
    const favoriteMeals = useSelector(store => store.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFav = favoriteMeals.some(favMeal => favMeal.id === itemData.item.id);
        return (
            <MealItem
                item={itemData.item}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: { meal: itemData.item, isFav: isFav }
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
});

export default MealList;