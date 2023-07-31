import React from 'react';
import { colors } from '../theme/colors';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootParamList } from '../types/RootParamList';
import TaskStackNavigator from './TaskStackNavigator';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TaskSearchScreen from '../srceens/TaskSearchScreen';
import SearchStackNavigator from './SearchStackNavigator';

const Tab = createBottomTabNavigator<RootParamList>()

const RootNavigator = () => {

    const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: colors.primaryDark }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel.toString()
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const icon = label == 'Task list' ? require('../assets/images/list-outline.png') : require('../assets/images/search-outline.png')

                    return (
                        <TouchableOpacity
                            key={label}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{ height: 20, width: 20, tintColor: isFocused ? colors.primary : colors.background }}
                                    source={icon}
                                />
                                <Text style={{ color: isFocused ? colors.primary : colors.background }}>
                                    {label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <Tab.Navigator
            tabBar={CustomTabBar}
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name='TaskStack' component={TaskStackNavigator} options={{ title: 'Task list' }} />
            <Tab.Screen name='SearchStack' component={SearchStackNavigator} options={{ title: 'Search' }} />
        </Tab.Navigator>
    );
}

export default RootNavigator;