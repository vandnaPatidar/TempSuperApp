import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientTile = ({ colors, source, title }) => {
  return (
    <LinearGradient
      colors={["#C4DDFE", "#FED8F7"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.tile}
    >
      <Image source={source} style={{ top: 4, left: 4 }} />
      <Text style={styles.textTile}>{title}</Text>
    </LinearGradient>
  );
};

const MyProfile = () => {
  const empcorner = [
    {
      id: "1",
      imageSource: require("../../../assets/EmployeeCorner/Disha.png"),
      text: "Disha",
    },
    {
      id: "2",
      imageSource: require("../../../assets/EmployeeCorner/Incentive.png"),
      text: " Incentive",
    },
    {
      id: "3",
      imageSource: require("../../../assets/EmployeeCorner/PaySlip.png"),
      text: "Pay Slip",
    },
    {
      id: "4",
      imageSource: require("../../../assets/EmployeeCorner/VisitHealth.png"),
      text: "Visit Health",
    },
    {
      id: "5",
      imageSource: require("../../../assets/EmployeeCorner/ManageTravel.png"),
      text: "Manage Travel",
    },
    {
      id: "6",
      imageSource: require("../../../assets/EmployeeCorner/Reimbursement.png"),
      text: "Reimbursement",
    },
  ];

  const quickaccess = [
    {
      id: "1",
      imageSource: require("../../../assets/Quickaccess/ClaimStatus.png"),
      text: "FBP Claim &\n Status",

    },
    {
      id: "2",
      imageSource: require("../../../assets/Quickaccess/EmployeeDirectory.png"),
      text: "Employee \nDirectory",
    },
    {
      id: "3",
      imageSource: require("../../../assets/Quickaccess/Myletters.png"),
      text: "My Letters",
    },
    {
      id: "4",
      imageSource: require("../../../assets/Quickaccess/PerformanceManagement.png"),
      text: "PerformanceManagement",
    },
    {
      id: "5",
      imageSource: require("../../../assets/Quickaccess/RequestProof.png"),
      text: "Request Proof",
    },
    {
      id: "6",
      imageSource: require("../../../assets/Quickaccess/InnovationIdea.png"),
      text: "Innovation Idea",
    },
    {
      id: "7",
      imageSource: require("../../../assets/Quickaccess/AutomationIdea.png"),
      text: "Automation Idea",
    },
    {
      id: "8",
      imageSource: require("../../../assets/Quickaccess/EthicsHotline.png"),
      text: "Ethics Hotline",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image source={item.imageSource} style={styles.gridImage} />
      <Text style={styles.gridText}>{item.text}</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.profileBox}>
        <Image
          source={require("../../../assets/myProfile/user-photo.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Kavya Goyal</Text>
          <Text style={styles.userOccupation}>Relationship Manager</Text>
        </View>
      </View>

      <View style={styles.frame}>
        <LinearGradientTile
          source={require("../../../assets/myProfile/MyProfile.png")}
          title="My Profile"
        />
        <LinearGradientTile
          source={require("../../../assets/myProfile/LeaveAttendance.png")}
          title="Leave & Attendance"
        />
        <LinearGradientTile
          source={require("../../../assets/myProfile/SalesPerformance.png")}
          title="Sales Performance"
        />
      </View>

      <View style={styles.gridBox}>
        <Text style={styles.boxHeading}>Employee Corner</Text>
        <FlatList
          data={empcorner}
          // numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ flexDirection: "row",justifyContent:'space-between',flexWrap:'wrap'}}
        />
      </View>
      <View style={styles.gridBox}>
        <Text style={styles.boxHeading}>Quick Access</Text>
        <FlatList
          data={quickaccess}
          // numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ flexDirection: "row",justifyContent:'space-between',flexWrap:'wrap'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBox: {
    height: 80,
    margin: 16,
    flexDirection: "row",
  },
  profileImage: {
    width: 80,
    height: 80,
    margin: 8,
  },
  profileDetails: {
    margin: 8,
  },
  profileName: {
    fontFamily: "Manrope",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: -0.0035,
    color: "#171A21",
    top: 12,
  },
  userOccupation: {
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18.2,
    letterSpacing: -0.0035,
    color: "#626772",
    top: 12,
  },
  frame: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tile: {
    width: 100,
    height: 96,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 8,
    borderRadius: 12,
    margin: 4,
  },
  textTile: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: -0.0035,
    textAlign: "left",
    paddingTop: 8,
    paddingLeft: 4,
  },
  gridBox: {
    padding: 16,
    paddingBottom: 0,
    borderRadius: 12,
    margin:16,
    backgroundColor: "white",
    shadowColor: "#505662",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 3,
  },
  boxHeading: {
    marginBottom: 16,
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.0035,
    textAlign: "left",
  },
  gridItem: {
    // marginRight: 'auto',
    flexDirection: "column",
    alignItems: "center",
    // minWidth:"33%",
    marginBottom: 16,
  },
  gridImage: {
   
  },
  gridText: {
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: -0.0035,
    textAlign: "center",
    
  },
});

export default MyProfile;
