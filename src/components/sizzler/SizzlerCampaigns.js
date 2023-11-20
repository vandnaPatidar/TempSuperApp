import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CircularImage from './CircularImage';
import sizzlerData from './sizzlerData.json';
import CampaignModal from './CampaignModal';
import { images } from '../../utils/constants';

const imageMap = {
  'FirstReward.png': images.FIRST_REWARD_IMAGE,
  'SecondReward.png': images.SECOND_REWARD_IMAGE,
  'ThirdReward.png': images.THIRD_REWARD_IMAGE,
  'FourthReward.png': images.FOURTH_REWARD_IMAGE,
};

const SizzlerCampaigns = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={sizzlerData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImageClick(item.source)}>
            <CircularImage source={imageMap[item.source]} text={item.text} />
          </TouchableOpacity>
        )}
      />
      <CampaignModal
        visible={modalVisible}
        onClose={closeModal}
        imageSource={imageMap[selectedImage]}
      />
    </View>
  );
};

export default SizzlerCampaigns;
