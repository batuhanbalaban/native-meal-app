import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const meal = props.navigation.getParam('meal');

    return (
        <View style={styles.screen}>
            <Text>!{meal.title}!</Text>
            <Button title="Go Home!" onPress={() => props.navigation.popToTop()} />
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const meal = navigationData.navigation.getParam('meal');
    return {
        headerTitle: meal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => { console.log('Mark as favorite!'); }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MealDetailScreen;