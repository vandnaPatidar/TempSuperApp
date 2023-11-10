import React from 'react'
import {View, Text, FlatList,Image} from 'react-native'
import {leads} from '../utils/constants'
import RenderExistingLeads from '../components/LeadCard'
import FloatingButton from '../components/FloatingButton'
import CustomHeader from '../components/CustomHeader'

const PolicyLogin=()=>{
return(
    <View style={{flex:1, backgroundColor:"#FFFFFF"}}>
        <FlatList
        data={leads}
        scrollEnabled={true}
        renderItem={(item, index) => <RenderExistingLeads {...item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatingButton name='Login New Policy'/>
    </View>
)
}

PolicyLogin.navigationOptions = {
  header: (props) => (
    <CustomHeader
      title="Screen Title"
      subheader="Subheader Text"
    />
  ),
};

export default PolicyLogin