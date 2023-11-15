import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SizzlerCampaigns from './sizzler/SizzlerCampaigns'
import QuickLinks from './quickLinks/QuickLinks'
import Dashboard from '../../components/Dashboard'
import PagerViewContest from './contest/PagerViewContest'
import { ScrollView } from 'react-native'

const Home = () => {
  return (
   
    <ScrollView style={styles.main}>
      <SizzlerCampaigns/>
      <View style={styles.pager}>
      <PagerViewContest/>
      </View>
     
      <QuickLinks/>
      <Dashboard/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  main:{
    // backgroundColor:'red',
    paddingRight:16,
    paddingLeft:16,
    paddingTop:12,
    paddingBottom:12,
    // backgroundColor:'red'
   
  },
  pager:{
    // backgroundColor:'yellow',
    borderRadius:20,
    marginTop:25,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
    
  }
})