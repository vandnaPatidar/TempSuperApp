import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#C4DDFE',
    backgroundColor:
      'rgba(196, 221, 254, 0.12) -12.5%, rgba(254, 216, 247, 0.12) 112.5%)',
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logoImage: {
    width: 32,
    height: 32,
  },
  dotStyle: {
    position: 'absolute',
    left: 24,
    bottom: 0,
    width: 12,
    height: 12,
    backgroundColor: '#D93025',
    borderWidth: 1.5,
    borderColor: '#FFF',
    borderRadius: 6,
  },
  rightSideArrow: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 10.5,
    height: 6,
  },
  helpCenterText: {
    width: 19.996,
    height: 20,
  },
});

export default styles;
