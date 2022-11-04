import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    blueColor: '#009dff',
    silverColor: '#6c757d',
    shadowColor: '#171717',
    whiteColor: 'white',
    transparentWhite: 'rgba(255, 255, 255, 0.4)',

    input: {
        color: 'white',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '100%',
        height: 50,
        padding: 10,
        marginBottom: 10
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        width: '100%',
        height: 50,
        padding: 10
    },

    buttonText: {
        color: '#009dff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default commonStyles;
  