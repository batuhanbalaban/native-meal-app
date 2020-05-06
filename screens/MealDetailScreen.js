import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import TextDefault from '../components/TextDefault';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <TextDefault>{props.children}</TextDefault>
        </View>
    );
};

const MealDetailScreen = props => {
    const meal = props.navigation.getParam('meal');
    const isFav = props.navigation.getParam('isFav');
    const currentMealIsFav = useSelector(store => store.meals.favoriteMeals.some(item => meal.id === item.id));

    const dispatch = useDispatch();
    const toggleFavoriteHandler = () => {
        dispatch(toggleFavorite(meal.id));
    }
    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [meal.id]);
    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealIsFav });
    }, [currentMealIsFav]);
    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />

            <View style={styles.details} >
                <TextDefault >{meal.duration}m</TextDefault>
                <TextDefault >{meal.complexity.toUpperCase()}</TextDefault>
                <TextDefault >{meal.affordability.toUpperCase()}</TextDefault>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                meal.ingredients.map((ing, index) => (<ListItem key={index}>{ing}</ListItem>))
            }

            <Text style={styles.title}>Steps</Text>
            {
                meal.steps.map((step, index) => (<ListItem key={index}>{step}</ListItem>))
            }
        </ScrollView>

    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const meal = navigationData.navigation.getParam('meal');
    const toggleFav = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: meal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title="Favorite"
                    iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFav}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }
});

export default MealDetailScreen;