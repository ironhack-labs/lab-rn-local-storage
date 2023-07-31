import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigationMain from './AppNavigationMain';
import AppNavigationTaskCreation from './AppNavigationTaskCreation';
const Tab = createBottomTabNavigator();

export default function AppNavigationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={AppNavigationMain} />
      <Tab.Screen name="New Task" component={AppNavigationTaskCreation} />
    </Tab.Navigator>
  );
}
