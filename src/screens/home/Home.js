import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SizzlerCampaigns from './sizzler/SizzlerCampaigns'
import QuickLinks from './quickLinks/QuickLinks'
import Dashboard from '../../components/Dashboard'

const Home = () => {
  return (
    <View>
      <SizzlerCampaigns/>
      <QuickLinks/>
      <Dashboard/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})