import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import LottieView from 'lottie-react-native';

const pagesData = [
  {
    id: '1',
    heading: 'Make 3.5K per policy',
    description:
      'Login 2 new policies before month end, & make 3.5k incentive for each NOP',
    buttonTitleLater: 'Later',
    buttonTitleCallNow: 'Call Now',
    condition: '#06733A', // Condition for the background color
  },
  {
    id: '2',
    heading: '24 New Leads',
    description:
      'Check if they are interested to purchase a new policy or have any referral',
    buttonTitleLater: null,
    buttonTitleCallNow: null,
    condition: '#007FFF', // Condition for the background color
  },
  {
    id: '3',
    heading: 'Set Up Meeting',
    description:
      'Ask your lead to take some time out for financial discussion.',
    buttonTitleLater: 'Later',
    buttonTitleCallNow: 'Call Now',
    condition: '#5b0082', // Condition for the background color
  },
  {
    id: '4',
    heading: 'No Meeting Tomorrow',
    description:
      'Check if some of your leads are available for a cup of coffee!',
    buttonTitleLater: null,
    buttonTitleCallNow: null,
    condition: '#C80000', // Condition for the background color
  },
];

const PagerViewContest = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      {pagesData?.map((page, index) => (
        <View
          key={index.toString()}
          style={[styles.page, { backgroundColor: page.condition, margin: 10 }]}
        >
          <View style={styles.animatedImage}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Image source={require('../../../../assets/ideaIcon.png')} />
              <Text style={styles.comonText}>KEY ACTIONS FOR YOU</Text>
            </View>
          </View>
          <Text style={styles.heading}>{page.heading}</Text>
          <Text style={styles.description}>{page.description}</Text>
          {page.buttonTitleCallNow == null ? null : (
            <View style={styles.onPressLaterAndButton}>
              <Text
                style={{
                  fontSize: 20,
                  textDecorationLine: 'underline',
                  color: 'white',
                }}
                onPress={console.log('pressed')}
              >
                {page.buttonTitleLater}
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 25,
                  width: 150,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>
                  <Text style={{ textAlign: 'center', fontSize: 17 }}>
                    {page.buttonTitleCallNow}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      ))}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    height: 240,
  },
  comonText: {
    marginLeft: 10,
    fontSize: 15,
    color: 'white',
  },
  onPressLaterAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  animatedImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  page: {
    borderRadius: 20,
    padding: 13,
    height: 230,
    borderBottomLeftRadius: 20,
  },
  description: {
    fontSize: 15,

    color: 'white',
    marginTop: 15,
    lineHeight: 25,
  },
  heading: {
    fontSize: 30,
    // marginLeft: 20,
    marginTop: 20,
    color: 'white',
  },
});

export default PagerViewContest;
