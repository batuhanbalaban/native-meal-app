import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>!FilterScreen!</Text>
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

export default FilterScreen;