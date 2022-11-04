import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '../../commonStyles/commonStyles';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Text>Profile</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ProfileScreen;