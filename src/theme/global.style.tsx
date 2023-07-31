import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const globaStyles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.secundary,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secundary,
        textAlign: 'center'
    },
    textInput: {
        width: '98%',
        minHeight: 50,
        justifyContent:'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 5,
        elevation: 3,
        marginVertical: 5,
        shadowColor: colors.primaryDark,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: .3
    },
    button: {
        backgroundColor: colors.primaryDark,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        elevation: 3,
        minWidth: 150,
        shadowColor: colors.primaryDark,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: .3
    }
})
