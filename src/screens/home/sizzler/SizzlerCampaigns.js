
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CircularImage from './CircularImage';
import sizzlerData from './sizzlerData.json';
import ThirdRewardImage from '../../../../assets/ThirdReward.png';
import FourthRewardImage from '../../../../assets/FourthReward.png';
import CampaignModal from './CampaignModal';
import FirstRewardImage from '../../../../assets/FirstReward.png';
import SecondRewardImage from '../../../../assets/SecondReward.png';

const imageMap = {
  'FirstReward.png': FirstRewardImage,
  'SecondReward.png': SecondRewardImage,
  'ThirdReward.png': ThirdRewardImage,
  'FourthReward.png': FourthRewardImage,
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
        data={sizzlerData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImageClick(item.source)}>
            <CircularImage source={imageMap[item.source]} text={item.text} />
          </TouchableOpacity>
        )}
      />
      <CampaignModal visible={modalVisible} onClose={closeModal} imageSource={imageMap[selectedImage]} />
    </View>
  );
};

export default SizzlerCampaigns;
