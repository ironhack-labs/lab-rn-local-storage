import * as React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import { colors } from '../theme/colors';
import { globaStyles } from '../theme/global.style';

interface Props {
    onPress: () => void,
    title?: string,
    background?: string,
    textColor?: string
}

const CustomButton = ({ onPress, title = 'Save', background = colors.primaryDark, textColor = colors.secundary }: Props) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.secundary}
            style={[globaStyles.button, { backgroundColor: background }]}>
            <Text style={{ color: textColor, fontWeight: 'bold' }}>{title}</Text>
        </TouchableHighlight>
    );
}

export default CustomButton;