import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import {images} from '../utils/constants'

const FloatingButton=({name})=>{
    return(
        <TouchableOpacity 
      style={{ 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        padding: 10,
        paddingHorizontal:20,
        position:'absolute',
        bottom: 12,
        left: 135,
        right:17,
        backgroundColor:'#FF8942'
    }}
      >
        <Text style={{color:"#FFFFFF",fontWeight:'700', fontSize:16}}>{name}</Text>
        <Image source={images.PLUS_BUTTON} style={{marginLeft:5}}/>
      </TouchableOpacity>
    )
}
export default FloatingButton;