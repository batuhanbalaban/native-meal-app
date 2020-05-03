import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>!CategoriesScreen!</Text>
            <Button title="Go to Meals!" onPress={()=>props.navigation.navigate({routeName:'CategoryMeals'})} />
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

export default CategoriesScreen;