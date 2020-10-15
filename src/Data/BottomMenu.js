import HomeScreen from '@screen/HomeScreen';

export const BottomMenu = [
  {
    name: 'Home',
    label: 'home',
    icon: 'home',
    activeIcon: '',
    disableIcon: '',
    component: HomeScreen,
  },
  {
    name: 'Favorite',
    label: 'favorite',
    icon: 'favorite-border',
    component: HomeScreen,
  },
  {
    name: 'Account',
    label: 'account',
    icon: 'account',
    component: HomeScreen,
  },
];
