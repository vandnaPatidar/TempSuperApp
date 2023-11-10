import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SizzlerCampaigns from './sizzler/SizzlerCampaigns'
import QuickLinks from './quickLinks/QuickLinks'
import LeadsAtGlance from '../../components/LeadsAtGlance'

const Home = () => {
  return (
    <View>
      <SizzlerCampaigns/>
      <QuickLinks/>
      <LeadsAtGlance/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})