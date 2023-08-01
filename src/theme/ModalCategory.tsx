import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        backgroundColor: 'gray'
    },
    modal: {
        flex: 1,
        marginVertical: 300,
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#000',

    },
    Text: {
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#000'
    },
    filter:{
        borderRadius: 16,
        borderWidth:2,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        width: Dimensions.get('screen').width/2.5
    }
})