import React from "react";
import {
  View,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import FirstModal from "../../../../assets/FirstModal.png";
import { images } from "../../../utils/constants";
import Table from "../../../components/Table";

const CampaignModal = ({ visible, onClose }) => {
  const jsonData = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
  ];
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          // backgroundColor: "transparent",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
        <View
          style={{
            flexDirectionL: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "white",
            padding: 20,
            paddingHorizontal: 24,
            paddingBottom: 24,
            paddingTop: 8,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <TouchableOpacity
            onPress={onClose}
            style={{
              height: 24,
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Image source={require("../../../../assets/close.png")} />
          </TouchableOpacity>
          <Image
            source={images.STATUS}
            resizeMode="contain"
            style={{ height: 125, width: "100%", marginBottom: 18 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "#171A21",
              fontWeight: "700",
              lineHeight: 28,
              letterSpacing: -0.07,
            }}
          >
            Beat your Best!
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              lineHeight: 14,
              letterSpacing: -0.035,
              color: "#171A21",
            }}
          >
            For Producer role (CAT, SPARC & Axis)
          </Text>
          <Text
            style={{
              marginVertical: 12,
              color: "#171A21",
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 22.4,
              letterSpacing: -0.056,
            }}
          >
            Reward : 5k per NOP
          </Text>
          <Text
            style={{
              fontSize: 8,
              fontWeight: 500,
              lineHeight: 11.2,
              letterSpacing: -0.028,
            }}
          >
            Applied & Paid in July 2023
          </Text>
         <Table/>
         <Table/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: "#FFFFFF",
    width: 11.99,
    height: 11.99,
    top: 6,
    left: 316,
  },
});

export default CampaignModal;
