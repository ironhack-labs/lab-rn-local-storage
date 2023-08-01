import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginVertical: 15,
    },
    touchable: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    taskTitle: {
        fontSize: 10,
        color: 'gray',
        marginBottom: 5
    },
    task: {
        fontSize: 15,
        fontWeight: '600'

    },
    dataContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})