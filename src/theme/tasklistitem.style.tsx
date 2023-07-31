import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const taskItemStyle = StyleSheet.create({
    container: {
        width: '98%',
        alignSelf:"center",
        elevation: 3,
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        overflow:"hidden",
        shadowColor: colors.primaryDark,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: .3
    }
})