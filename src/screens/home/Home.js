import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SizzlerCampaigns from './sizzler/SizzlerCampaigns'
import QuickLinks from './quickLinks/QuickLinks'

const Home = () => {
  return (
    <View>
      <SizzlerCampaigns/>
      <QuickLinks/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})