import React from 'react';
import { View,  StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                item={itemData.item}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: { meal: itemData.item }
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