// App.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StarRatingModal from "./StarRatingModal";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRatingSubmit = (value) => {
    setRating(value);
    console.log("Rating submitted:", value); // Or handle it as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Star Rating Modal</Text>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>Rate Now</Text>
      </TouchableOpacity>
      <Text style={styles.ratingText}>Your Rating: {rating}</Text>

      <StarRatingModal
        visible={modalVisible}
        onClose={closeModal}
        onSubmit={handleRatingSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  ratingText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default HomeScreen;
