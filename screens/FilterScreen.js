import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primary }}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};

const FilterScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setILactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian
        };
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={newVal => setIsGlutenFree(newVal)} />
            <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={newVal => setILactoseFree(newVal)} />
            <FilterSwitch label="Vegan" state={isVegan} onChange={newVal => setVegan(newVal)} />
            <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={newVal => setVegetarian(newVal)} />

        </View>
    );
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Options',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => { navData.navigation.toggleDrawer(); }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterScreen;