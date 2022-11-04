import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '../../commonStyles/commonStyles';

const SignupScreen = () => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Text>Sign up</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default SignupScreen;