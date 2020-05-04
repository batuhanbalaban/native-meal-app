import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';
import TextDefault from './TextDefault';
const MealItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={props.onSelect}
            >
                <View style={{ ...styles.mealRow, ...styles.mealHeader }} >
                    <ImageBackground
                        style={styles.bgImage}
                        source={{ uri: props.item.imageUrl }}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{props.item.title}</Text>
                        </View>

                    </ImageBackground>


                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }} >
                    <TextDefault >{props.item.duration}m</TextDefault>
                    <TextDefault >{props.item.complexity.toUpperCase()}</TextDefault>
                    <TextDefault >{props.item.affordability.toUpperCase()}</TextDefault>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#F5F5F5',
        borderRadius:10,
        overflow:'hidden',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});
export default MealItem;