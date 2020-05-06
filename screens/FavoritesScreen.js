import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import TextDefault from '../components/TextDefault';

const FavoritesScreen = props => {
    const favoriteMeals = useSelector(store => store.meals.favoriteMeals);

    if (!favoriteMeals || favoriteMeals.length === 0) {
        return (
            <View style={styles.content}>
                <TextDefault>No favorite meals found. Start adding by clicking star icon in the header of your Favorite meal detail!</TextDefault>
            </View>
        );
    }
    return (
        <MealList listData={favoriteMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => { navData.navigation.toggleDrawer(); }}
                />
            </HeaderButtons>
        )
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

export default FavoritesScreen;