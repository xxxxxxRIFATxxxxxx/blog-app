import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '../../commonStyles/commonStyles';
import Blog from '../../Components/Blog/Blog';

const HomeScreen = () => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Blog />
                <Blog />
                <Blog />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;