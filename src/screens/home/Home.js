import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import SizzlerCampaigns from '../../components/sizzler/SizzlerCampaigns';
import QuickLinks from '../../components/quickLinks/QuickLinks';
import LeadsAtGlance from '../../components/LeadsAtGlance/LeadsAtGlance';
import PagerViewContest from '../../components/contest/PagerViewContest';
import Header from '../../components/Header/Header';
import Performance from '../../components/performance/Performance';
import MorningHuddles from '../../components/MorningHuddle/MorningHuddles';

const Home = () => {
  return (
    <>
      <View style={{ marginTop: 25, marginBottom: 16 }}>
        <Header />
      </View>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <SizzlerCampaigns />
        <View style={styles.pager}>
          <PagerViewContest />
        </View>

        <View>
          <MorningHuddles />
        </View>

        <QuickLinks />

        <Performance />
        {/* <Dashboard /> */}

        <LeadsAtGlance />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  pager: {
    // backgroundColor:'yellow',
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
