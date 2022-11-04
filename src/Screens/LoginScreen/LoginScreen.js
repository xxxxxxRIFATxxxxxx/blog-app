import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '../../commonStyles/commonStyles';

const LoginScreen = () => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Text>Login</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default LoginScreen;