import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const MorningHuddles = () => {
  const meetingData = {
    numberOfMeetings: 4,
    meetings: [
      {
        startTime: '9:30',
        endTime: '10:30',
        title: 'Daily Standup Meeting',
        description: 'Morning huddle',
        imageSource: require('../../../assets/microsoft_teams.png'), // Replace with your image source
      },
    ],
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerHeader}>
        <Text
          style={{
            color: '#171A21',
            fontSize: 18,
            fontWeight: '700',
          }}
        >
          Today's schedule
        </Text>
        <View style={styles.meetingContainer}>
          <Text style={{ color: '#171A21', fontSize: 13, fontWeight: '700' }}>
            {meetingData.numberOfMeetings}
          </Text>
        </View>
        <Pressable style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
          <Text>View all</Text>
        </Pressable>
      </View>

      {meetingData.meetings.map((meeting, index) => (
        <View key={index} style={styles.innerHeaderSecond}>
          <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
              {meeting.startTime}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }}>
              {meeting.endTime}
            </Text>
          </View>

          <View
            style={{
              width: 4,
              height: 42,
              borderRadius: 8,
              backgroundColor: '#5DACF0',
              marginLeft: '5%',
            }}
          />

          <View style={{ marginLeft: '5%' }}>
            <Text
              style={{ fontSize: 13, fontWeight: '400', fontFamily: 'Manrope' }}
            >
              {meeting.title}
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: '500', fontFamily: 'Manrope' }}
            >
              {meeting.description}
            </Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <Image
              style={{ width: 40, height: 36 }}
              source={meeting.imageSource}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: 328,
    padding: 16,
    width: '90%',
    // paddingVertical: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 16,
  },
  innerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meetingContainer: {
    padding: 10,
    borderRadius: 8,
    marginRight: 70,
    backgroundColor: '#EEEEEF',
  },
  innerHeaderSecond: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default MorningHuddles;
