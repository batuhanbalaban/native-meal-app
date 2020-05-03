import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>!CategoryMealsScreen!</Text>
            <Button title="Go to MealDetail!" onPress={() => props.navigation.navigate({ routeName: 'MealDetail' })} />
            <Button title="Go Back!" onPress={() => props.navigation.goBack()} />

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CategoryMealsScreen;