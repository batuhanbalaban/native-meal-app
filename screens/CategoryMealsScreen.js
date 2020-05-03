import React from 'react';
import { View, Text, StyleSheet, Button,Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = props => {
    const category = props.navigation.getParam('category');
    return (
        <View style={styles.screen}>
            <Text>!CategoryMealsScreen!</Text>
            <Text>{category.title}</Text>
            <Button title="Go to MealDetail!" onPress={() => props.navigation.navigate({ routeName: 'MealDetail' })} />
            <Button title="Go Back!" onPress={() => props.navigation.goBack()} />

        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CategoryMealsScreen;