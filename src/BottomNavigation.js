import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  LogBox,
  Image,
  Text,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Home from './screens/home/Home';
import { icons, images } from './utils/constants';

LogBox.ignoreAllLogs();

// const Screen1 = () => {
//   return <View style={styles.screen1} />;
// };

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

const Screen3 = () => {
  return <View style={styles.screen2} />;
};

const Screen4 = () => {
  return <View style={styles.screen2} />;
};

const BottomNavigation = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = icons.HOME_ICON;
        name = 'Home';
        break;
      case 'title2':
        icon = icons.CONTACTS_ICON;
        name = 'Leads';
        break;
      case 'title3':
        icon = icons.CALENDAR_ICON;
        name = 'Calendar';
        break;
      case 'title4':
        icon = icons.MENU_ICON;
        name = 'Menu';
        break;
    }

    return (
      <>
        <Image
          source={icon}
          size={26}
          color={routeName === selectedTab ? 'black' : 'gray'}
        />
        <Text>{name}</Text>
        {/* <AntDesign name={icon} size={25}  color={routeName === selectedTab ? 'black' : 'gray'} /> */}
      </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type='DOWN'
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor='white'
      initialRouteName='title1'
      borderTopLeftRight
      screenOptions={{ headerShown: false }}
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Click Action')}
          >
            <Image source={icons.MENU_CLIPBOARD} width={30} height={30} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name='title1'
        position='LEFT'
        component={Home}
        options={{ headerShown: false }}
      />
      <CurvedBottomBarExpo.Screen
        name='title2'
        component={() => <Screen2 />}
        position='LEFT'
      />
      <CurvedBottomBarExpo.Screen
        name='title3'
        position='RIGHT'
        component={() => <Screen3 />}
      />
      <CurvedBottomBarExpo.Screen
        name='title4'
        component={() => <Screen4 />}
        position='RIGHT'
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

export default BottomNavigation;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
