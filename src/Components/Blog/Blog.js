import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import commonStyles from '../../commonStyles/commonStyles';

const Blog = () => {
    return (
        <View 
            style={styles.blogContainer}
        >   
            <View style={styles.blogAuthorContainer}>
                <Image 
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.blogAuthorImage} 
                />

                <View>
                    <Text 
                        style={styles.blogAuthorName}
                    >
                        Mr. Fatman
                    </Text>

                    <Text 
                        style={styles.blogTime}
                    >
                        12 April, 2022
                    </Text>
                </View>
            </View>

            <Text 
                style={styles.blogTitle}
            >
                Why React Re-Renders
            </Text>

            <Text 
                style={styles.blogText}
            >
                In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.
            </Text>

            <Image 
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={styles.blogImage} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    blogContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: '100%',
        shadowColor: commonStyles.shadowColor,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 20
    },

    blogTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },

    blogText: {
        color: commonStyles.silverColor,
        textAlign: 'justify'
    },

    blogImage: {
        width: '100%',
        height: 300,
        marginTop: 20,
        borderRadius: 8,
    },

    blogAuthorImage: {
        borderColor: commonStyles.blueColor,
        borderWidth: 1,
        borderRadius: '100%',
        width: 50,
        height: 50,
        marginRight: 10
    },

    blogAuthorName: {
        fontSize: 17
    },

    blogTime: {
        color: commonStyles.silverColor,
        fontSize: 11
    },

    blogAuthorContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Blog;