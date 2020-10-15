import HomeScreen from '@screen/HomeScreen';
import AccountScreen from '@screen/AccountScreen';

export const BottomMenu = [
  {
    name: 'Home',
    label: 'home',
    icon: 'home',
    activeIcon: require('@images/activeHome.png'),
    inActiveIcon: require('@images/inActiveHome.png'),
    component: HomeScreen,
  },
  {
    name: 'Favorite',
    label: 'favorite',
    icon: 'favorite-border',
    activeIcon: require('@images/activeFavorite.png'),
    inActiveIcon: require('@images/inActiveFavorite.png'),
    component: AccountScreen,
  },
  {
    name: 'Account',
    label: 'account',
    icon: 'account',
    activeIcon: require('@images/activeUser.png'),
    inActiveIcon: require('@images/inActiveUser.png'),
    component: AccountScreen,
  },
];
