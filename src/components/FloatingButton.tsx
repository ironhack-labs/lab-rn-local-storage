import * as React from 'react';
import { Pressable, Image } from 'react-native'
import { floattongButtonStyle } from '../theme/floatingbutton.style';



const FloatingButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <Pressable
            style={floattongButtonStyle.button}
            onPress={onPress}>
            <Image
                style={floattongButtonStyle.icon}
                source={require('../assets/images/add-outline.png')}
            />
        </Pressable >
    );
}

export default FloatingButton;