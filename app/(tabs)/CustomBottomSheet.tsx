// BottomSheet.js
import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";

const CustomBottomSheet = () => {
  const sheetRef = useRef(null);

  // Function to render the content of the bottom sheet
  const renderContent = () => (
    <View style={styles.sheetContent}>
      <Text style={styles.sheetTitle}>Hello, I'm a Bottom Sheet!</Text>
      <Text style={styles.sheetSubtitle}>
        Swipe down to close or click below:
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sheetRef.current.snapTo(1)} // Close the bottom sheet
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[300, 0]} // Defines the height of the bottom sheet
      borderRadius={10} // Adds a rounded corner
      renderContent={renderContent} // Function that renders the content
    />
  );
};

const styles = StyleSheet.create({
  sheetContent: {
    backgroundColor: "white",
    padding: 16,
    height: 300, // Height of the sheet content
    alignItems: "center",
  },
  sheetTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sheetSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CustomBottomSheet;
