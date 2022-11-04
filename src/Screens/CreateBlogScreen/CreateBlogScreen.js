import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import commonStyles from '../../commonStyles/commonStyles';

const CreateBlogScreen = () => {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState(""); 
    const [ isLoading, setIsloading ] = useState(false); 
    
    const reset = () => {
        setTitle("");
        setDescription("");
        setIsloading(false);
    };
    
    const handleSubmitBlog = () => {
        setIsloading(true);

        const blog = {
            title,
            description
        };

        setTimeout(() => {
            reset();
        }, 5000)
    };

    return (
        <SafeAreaView style={[ commonStyles.container, styles.createBlogContainer ]}>
            <Text 
                style={styles.createBlogTitle}
            >
                Write Blog
            </Text>

            <TextInput
                style={commonStyles.input}
                onChangeText={(text) => setTitle(text)}
                value={title}
                placeholder="Title"
                placeholderTextColor={commonStyles.whiteColor}
                selectionColor={commonStyles.whiteColor}
            />

            <TextInput
                style={commonStyles.input}
                onChangeText={(text) => setDescription(text)}
                value={description}
                placeholder="Description"
                placeholderTextColor={commonStyles.whiteColor}
                selectionColor={commonStyles.whiteColor}
                multiline={true}
            />

            <TouchableOpacity
                style={commonStyles.button}
                onPress={handleSubmitBlog}
                disabled={isLoading}
            >
                <Text 
                    style={commonStyles.buttonText}
                >
                    { isLoading ? "Loading..." : "Post" }
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    createBlogContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commonStyles.blueColor
    },

    createBlogTitle: {
        color: commonStyles.whiteColor,
        marginBottom: 10,
        fontSize: 24,
    }
});

export default CreateBlogScreen;