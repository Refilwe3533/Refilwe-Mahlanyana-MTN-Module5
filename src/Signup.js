import React, { Component } from 'react';
import { Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

const SignUp = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text style={styles.baseText}>
                SignUp
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
            />
            <Pressable
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </Pressable>

            <Pressable
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonTextStyle}>Login</Text>
            </Pressable>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    screenContainer: {
        paddingTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonStyle: {
        height: 54,
        width: '75%',
        marginTop: 32,
        borderRadius: 8,
        color: '#fdfdfd',
        fontWeight: '700',
    },
});

export default SignUp;