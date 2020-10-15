import OfficialStoreScreen from '@screen/OfficialStoreScreen';
import HomeScreen from '@screen/HomeScreen';
// import FeedStack from '@stack/FeedStack';
// import LoginScreen from '@screen/LoginScreen';
import HeaderRoot from '@screen/HeaderRoot';

export const BottomMenu = [
  {
    name: 'Home',
    label: 'home',
    icon: 'signature-image',
    component: HomeScreen,
  },
  {
    name: 'Favorite',
    label: 'favorite',
    icon: 'store',
    component: OfficialStoreScreen,
  },
  {
    name: 'Account',
    label: 'account',
    icon: 'store',
    component: OfficialStoreScreen,
  },
];
