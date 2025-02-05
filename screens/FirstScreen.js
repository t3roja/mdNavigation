import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default function FirstScreen({ navigation }) {

    return (
        <>
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

})