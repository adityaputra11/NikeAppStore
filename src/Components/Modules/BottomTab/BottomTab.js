import React from 'react';
import {BottomMenu} from '@data';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFont, colorTheme} from '@util';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
        },
      }}>
      {BottomMenu.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({color, size, focused}) => (
              // eslint-disable-next-line react-native/no-inline-styles
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: focused ? colorTheme.primaryColor : 'gray',
                  fontSize: responsiveFont(9),
                  marginBottom: 5,
                  marginTop: 10,
                }}>
                {item.label}
              </Text>
            ),
            tabBarIcon: ({color, size, focused}) => (
              <MaterialCommunityIcons
                name={item.icon}
                color={focused ? colorTheme.primaryColor : 'gray'}
                size={size}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomTab;
