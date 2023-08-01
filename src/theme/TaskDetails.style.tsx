import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    title: {
        fontSize: 12,
        color: 'gray'
    },
    subText: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        marginBottom: 15
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchables:{
        width: Dimensions.get('screen').width/2.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'gray',
        height: 50
    }
})