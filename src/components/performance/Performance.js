import React from 'react';
import {  StyleSheet, Text, View,Image, Picker,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { animations, images } from '../../utils/constants'


const MyComponent = () => {    
  const [isSalseKPI, setSalseKPI] = useState(true);
  const data = [
    { label: '1', value: '1' }
  ];
  const [value, setValue] = useState(null);
  const handlePress = (isTrue) => {
    setSalseKPI(isTrue);
  }
  
   return  <View> 
            <View style={styles.performance}>
              <Text style={styles.text}>
              PERFORMANCE
            </Text>
            </View>
            <View style={styles.containerKpi}>
              <TouchableOpacity  onPress={() => handlePress(true)}>
            <Text style={[styles.textKpi, isSalseKPI && [{color: '#0000FF'},{borderBottomWidth: 2},{borderColor:'#0000FF'}]]}>
              Sales KPIs
            </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => handlePress(false)}>
            <Text style={[styles.textAKpi , !isSalseKPI &&  [{color: '#0000FF'},{borderBottomWidth: 2},{borderColor:'#0000FF'}]]}>
              Activity KPIs
            </Text>
            </TouchableOpacity>
            </View>
            { isSalseKPI ?
            <View style={{
            width: 360,
            height: 415,
            paddingTop: 0,
            paddingBottom: 16,
          }}>
        <View style={[styles.containerKpi, {borderBottomWidth: 0}]}>
         <Text style={styles.updateText}>
         Last updated on 25 Oct 2023
         </Text>
         <View style={[styles.dropdown,{marginRight:5}]}>
         <Dropdown
        
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        labelField="label"
        valueField="value"
        placeholder="FTD"
        
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        />
     
    </View>
         
         </View>
      
         <Grid>
        <Row key={1} style={{
            width: 360,
            height: 160,
            paddingTop: 16,
            paddingBottom: 16,
          }}>
          <Col style={styles.container}>
          
              <Text style={styles.textStyle1}>Number of Policies</Text>
              <View style={{flexDirection: 'row'}}><Text style={styles.textStyle2}>2 </Text>
              <Text style={{marginTop:12}}>/8</Text></View>
              
              <View style={styles.progressBar}>
                <Progress.Bar progress={0.3} width={132} color='#252931'/>
              </View>
              <Text style={styles.textStyle3}>6 Policies behind</Text>
            
          </Col>
          <Col style={styles.container}>
            
              <Text style={styles.textStyle1}>Weighted First Year Premium (WFYP)</Text>
              <View style={{flexDirection: 'row'}}><Text style={styles.textStyle2}>₹ 40L </Text>
              <Text style={{marginTop:12}}>/50L</Text></View>
              <View style={styles.progressBar}>
                <Progress.Bar progress={0.3} width={132} color='#252931'/>
              </View>
              <Text style={styles.textStyleCol2}>10 Lakh behind</Text>
           
          </Col>
        </Row>
        <Row key={1} style={{
            width: 360,
            height: 415,
            paddingTop: 16,
            paddingBottom: 16,
          }}>
          
          <Col style={[styles.container,{backgroundColor: '#E6F5ED'}]}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <View  style={{position: 'absolute'}}>
                  <LottieView
                    source={animations.CONFETTI}
                    autoPlay
                    loop={true}
                    style={{ width: 90,height:80,
                    left:5,
                    bottom:10}}
                  />
              </View>
              <View  style={{position: 'absolute'}}>
                <Text style={styles.textStyle1}>Protection WFYP</Text>
                <View style={{flexDirection: 'row'}}><Text style={[styles.textStyle2,{color: '#099A4F'}]}>₹ 20L </Text>
                <Text style={{marginTop:12}}>/15L</Text></View>
                <View style={styles.progressBar}>
                  <Progress.Bar progress={0.3} width={132} />
                </View>
                <Text style={styles.textStyleCol3}>110% Achieved</Text>
              </View>
            </View>
          </Col>
         
          <Col style={styles.container}>
          
              <Text style={styles.textStyle1}>Annuity WFYP</Text>
              
              <View style={{flexDirection: 'row'}}><Text style={styles.textStyle2}>₹ 20L </Text>
              <Text style={{marginTop:12}}>/30L</Text></View>
             
              <View style={styles.progressBar}>
                <Progress.Bar progress={0.3} width={132} color='#252931' />
              </View>
              <Text style={styles.textStyleCol2}>10 Lakh behind</Text>
        
          </Col>
        </Row>
        </Grid>
             </View> :

          <View style={{
            width: 360,
            height: 415,
            paddingTop: 0,
            paddingBottom: 16,
          }}>
         <View style={[styles.containerKpi, {borderBottomWidth: 0}]}>
         <Text style={styles.updateText}>
         Last updated on 25 Oct 2023
         </Text>
         <View style={[styles.dropdown,{marginRight:5}]}>
         <Dropdown
        
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        labelField="label"
        valueField="value"
        placeholder="MTD"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        />
     
    </View>
         
         </View>
      
         <Grid>
        <Row key={1} style={{
            width: 360,
            height: 160,
            paddingTop: 16,
            paddingBottom: 16,
          }}>
          <Col style={styles.container}>
          
              <Text style={styles.textStyle1}>First Meeting           Done</Text>
              <View style={{flexDirection: 'row'}}><Text style={styles.textStyle2}>23 </Text>
              <Text style={{marginTop:12}}>/40</Text></View>
              
             
              <View style={styles.progressBar}>
                <Progress.Bar progress={0.3} width={132} color='#252931'/>
              </View>
              <Text style={styles.textStyle3}>53% Completed</Text>
            
          </Col>
          <Col style={styles.container}>
            
              <Text style={styles.textStyle1}>Meeting              Scheduled</Text>
              <View style={{flexDirection: 'row'}}><Text style={styles.textStyle2}>1 </Text>
              <Text style={{marginTop:12}}>/4</Text></View>
              <View style={styles.progressBar}>
                <Progress.Bar progress={0.3} width={132} color='#252931' />
              </View>
              <Text style={styles.textStyleCol2}>20% Completed</Text>
           
          </Col>
        </Row>
      </Grid>

          <View style={styles.avtivityKpiContainer}>
            <View style={{flexDirection:'row'}}>
              <View>
                <Text style={styles.avtivityKpitextStyle1}>
                  50 High propensity leads
                </Text>
                <Text style={styles.avtivityKpitextStyle2}>
                  The leads have a high conversion potential and most likely to convert
                </Text>
              </View>
              <View>
                <LottieView
                    source={animations.HOT}
                    autoPlay
                    loop={true}
                    style={{ width: 90,height:80,
                    right: 10,
                    top:5}}
                  />
              </View>
            </View>
          <View>
     
          <View style={{flexDirection:'row'}}>
            <Text style={styles.avtivityKpitextStyle3}>MARCH</Text>
            <View style={styles.checkStyle.container}>
            <Text style={styles.checkStyle.text}>check Now</Text>
            <Image source={images.ARROW_RIGHT} style={{marginTop:2}} />
            </View>
          </View>
        </View>
        </View>
        </View>      
         }
        </View>
};

export default MyComponent;

const styles = StyleSheet.create({
    performance: {
        width: 360,
        height: 52,
        backgroundColor: 'rgba(232, 235, 241, 0.5)', 
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
    },
    container: {
      borderWidth: 1,
      borderColor: '#EEEEEF',
      borderRadius: 12,
      width: 156,
      height: 150,
      backgroundColor: '#FFFFFF',
      padding: 12,
      margin:10,
    },
    containertext:{
       width: 132,
       height: 75,
    },
    textStyle1: {
      fontSize: 13,
      lineHeight: 18.2,
      fontFamily: 'Manrope-Regular',
      fontWeight: '500',
      color: '#171A21',
    },
    textStyle2: {
      fontSize: 25,
      lineHeight: 35,
      fontFamily: 'Manrope-Regular', 
      fontWeight: '700',
      color: '#171A21',
    },
    textStyle3: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'Manrope-Bold', 
      color: '#D93025',
    },
    progressBar: {
      width: 132,
      height: 2,
      marginTop:12,
      marginBottom:12,
    },
    textStyleCol2: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'Manrope-Bold',
      fontWeight: '700',
      color: '#F27930',
    },
    textStyleCol3: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'Manrope-Bold', 
      fontWeight: '700',
      color: '#099A4F',
    },
    containerKpi: {
      marginTop:16,
      borderBottomWidth: 0.8,
      borderColor: '#CBCCD0',
      width: 360,
      height: 37,
      paddingStart: 16,
      paddingTop: 8,
      paddingEnd: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textKpi: {
      fontSize: 16,
      lineHeight: 22.4,
      fontFamily: 'Manrope', 
      fontWeight: '700',
      color: '#505662',
      width: 82,
      height: 29,
    },
    textAKpi: {
      fontSize: 16,
      lineHeight: 22.4,
      fontFamily: 'Manrope',
      fontWeight: '700',
      color: '#505662',
      width: 99,
      height: 29,
      marginRight:125,
    },
    updateText: {
      fontSize: 13,
      lineHeight: 18.2,
      fontFamily: 'Manrope',
      fontWeight: '400',
      color: '#626772',
      
    },
    avtivityKpiContainer: {
      width: 330,
      height: 150,
      backgroundColor: '#252931',
      marginLeft: 15,
      borderRadius: 16,
    },
    avtivityKpitextStyle1: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: 'Manrope-Bold',
      fontWeight: '700',
      color: '#FFD639',
      width: 238, 
      height: 28,  
      marginTop:12,
      marginLeft:16
    },
    avtivityKpitextStyle2: {
      fontSize: 13,
      lineHeight: 18.2,
      fontFamily: 'Manrope-Regular', 
      fontWeight: '400',
      color: '#FFFFFF',
      width: 218, 
      height: 36, 
      marginLeft: 16,
      marginTop: 2.
    },
    avtivityKpitextStyle3: {
      fontSize: 13,
      lineHeight: 18.2,
      fontFamily: 'Manrope-Medium',
      fontWeight: '600',
      color: '#A8ABB1',
      width: 47,
      height: 18, 
      marginLeft: 16,
      marginTop:19,
    },
    checkStyle:{
      container: {
        borderWidth: 1,
        borderColor: '#CBCCD0',
        width: 130,
        height: 32,
        backgroundColor: '#FFFFFF',
        borderRadius: 200,
        paddingStart: 16,
        paddingTop: 5,
        paddingEnd: 16,
        paddingBottom: 10,
        marginLeft:115,
        marginTop:12,
        flexDirection:'row',
      },
        text: {
          fontSize: 13,
          lineHeight: 18.2,
          fontFamily: 'manrope-semibold', 
          fontWeight: '700',
          color: '#343842',
          textAlign: 'center',
          paddingEnd:10

        },
    },
    dropdown: {
      borderWidth: 1,
      borderColor: '#CBCCD0',
      width: 70,
      height: 24,
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      paddingStart: 6,
      paddingBottom: 10,
    },
   

  });
  