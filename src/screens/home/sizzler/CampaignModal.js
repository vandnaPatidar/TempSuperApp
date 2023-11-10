
import React from 'react';
import { View, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FirstModal from '../../../../assets/FirstModal.png';
const CampaignModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Image source={require('../../../../assets/close.png')} />
        </TouchableOpacity>
        <Image source={FirstModal} style={styles.modalImage} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: 328,
    height: 544.71,
    backgroundColor: '#ffffff',
    padding: 8,
    paddingTop: 8,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    borderRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginLeft: 8,
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  closeButton: {
    width: 11.99,
    height: 11.99,
    top: 6,
    left: 316,
  },
});

export default CampaignModal;
