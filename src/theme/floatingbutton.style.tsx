import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const floattongButtonStyle = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,
        end: 20,
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: colors.secundary,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: colors.primaryDark,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: .3
    },
    icon: {
        tintColor: '#61677A',
        height: 40,
        width: 40
    }
})