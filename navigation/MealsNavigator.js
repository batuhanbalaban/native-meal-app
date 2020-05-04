import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsStackNavigator = createStackNavigator({
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: MealDetailScreen
}, {
    initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
});

const FavoritesStackNavigator = createStackNavigator({
    Favorites: { screen: FavoritesScreen },
    MealDetail: MealDetailScreen
}, {
    initialRouteName: 'Favorites',
    defaultNavigationOptions: defaultStackNavOptions
});


const tabScreenConfig = {
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />),
            tabBarColor: Colors.primary,
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (<Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />),
            tabBarColor: Colors.accent,
        }
    },
};
const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primary
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accent,
        }
    });

const filterScreenStackNav = createStackNavigator(
    {
        Categories: { screen: FilterScreen },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);
const MainNavigator = createDrawerNavigator({
    MealsFavs: { screen: MealsFavTabNavigator, navigationOptions: { drawerLabel: 'Meals' } },
    Filters: { screen: filterScreenStackNav, navigationOptions: { drawerLabel: 'Filters' } }
}, {
    contentOptions: {
        activeTintColor: Colors.accent,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);