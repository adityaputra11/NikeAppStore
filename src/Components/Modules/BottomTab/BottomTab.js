import React from 'react';
import {BottomMenu} from '@data';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveFont, colorTheme} from '@util';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          padding: 10,
          backgroundColor: '#F2F2F2',
          elevation: 0,
          borderWidth: 0,
        },
      }}>
      {BottomMenu.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({color, size, focused}) => (
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: focused ? colorTheme.primaryColor : 'gray',
                  fontSize: responsiveFont(9),
                  marginBottom: 5,
                }}
              />
            ),
            tabBarIcon: ({color, size, focused}) => (
              <MaterialIcons
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
