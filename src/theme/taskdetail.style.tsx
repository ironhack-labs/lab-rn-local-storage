import { Dimensions, StyleSheet } from 'react-native'
import { colors } from './colors'

export const taskDetailStyle = StyleSheet.create({
    descriptionCard: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        minHeight: 200,
        shadowColor: colors.primaryDark,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: .3,
        maxHeight:'75%'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 10,
        alignItems: 'flex-start'
    }
})