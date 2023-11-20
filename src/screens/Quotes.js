import React from "react";
import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { plans } from "../utils/constants";
import RenderQuotesItem from "../components/QuoteCard";
import FloatingButton from "../components/FloatingButton";

const Quotes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        Login policy from the generated quote or create new quote for
        <Text style={{ fontWeight: 600 }}> PanKaj Rathi</Text>
      </Text>
      <FlatList
        data={plans}
        scrollEnabled={true}
        renderItem={(item, index) => <RenderQuotesItem {...item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatingButton name='Login New Policy'/>
    </SafeAreaView>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  description: {
    width: 360,
    padding: 16,
    alignItems: "flex-start",
    gap: 8,
    color: "#000000",
    fontSize: 18,
    fontFamily: "manrope",
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: -0.056,
  },
  planCard: {
    backgroundColor: "skyblue",
    borderRadius: 8,
    margin: 16,
  },
  planName: {
    fontSize: 18,
    margin: 12,
  },
  planDetailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CBCCD0",
    padding: 12,
  },
});
export default Quotes;
