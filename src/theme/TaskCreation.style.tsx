import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: 'gray'
    },
    inputContainer: {
        marginHorizontal: 10,
        marginVertical: 15,
    },
    error: {
        marginHorizontal: 10,
        color: 'red'
    },
    textPickerContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    textPicker: {
        fontSize: 20,
        fontWeight: '700'
    },
    addTask: {
        alignSelf: 'center',
        borderRadius: 14,
        backgroundColor: 'gray',
        width: Dimensions.get('screen').width / 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})