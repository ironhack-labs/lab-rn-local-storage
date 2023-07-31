import * as React from 'react';
import { Task } from '../types/Task';
import { View, Text, Pressable, Image } from 'react-native'
import { taskItemStyle } from '../theme/tasklistitem.style';
import { colors } from '../theme/colors';

interface Props {
    item: Task,
    onPress?: () => void
}

const TaskListItem = ({ item, onPress = () => { } }: Props) => {

    return (
        <Pressable
            onPress={onPress}
            style={[taskItemStyle.container, { backgroundColor: item.completed ? colors.primaryDark : colors.primary }]}>
            {
                item.completed && <Image
                    style={{ height: 100, width: 100, position: 'absolute', top: -19, end: -28, opacity: .15, tintColor: colors.primary }}
                    source={require('../assets/images/checkmark-circle-outline.png')}
                />
            }
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={{ color: item.completed ? colors.primary : colors.background, fontWeight: 'bold' }}>{item.title}</Text>
                {item.completed ? <Text style={{ color: colors.primary }}>Completed</Text> : <Text style={{ color: colors.background }}>{item.date}</Text>}
            </View>
            <Text style={{ color: item.completed ? colors.primary : colors.background, fontSize: 10, marginBottom: 10 }}>{item.category.title}</Text>

        </Pressable>
    );
}

export default TaskListItem;