import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, "PaymentScreen">;

const paymentMethods = [
  { id: '1', name: 'Visa', cardNumber: '•••• 2209', icon: '💳' },
  { id: '2', name: 'PayPal', cardNumber: '•••• 2209', icon: '💸' },
  { id: '3', name: 'MasterCard', cardNumber: '•••• 2209', icon: '💳' },
  { id: '4', name: 'Apple Pay', cardNumber: '•••• 2209', icon: '🍎' },
];

const PaymentScreen: React.FC<Props> = ({ route, navigation }) => {
  const { orderTotal, shippingFee, totalWithShipping } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const handleContinue = () => {
    setModalVisible(true);
  };

  const renderPaymentMethod = ({ item }: { item: { id: string; name: string; cardNumber: string; icon: string } }) => (
    <View style={styles.paymentMethodContainer}>
      <Text style={styles.paymentIcon}>{item.icon}</Text>
      <Text style={styles.paymentName}>{item.name}</Text>
      <Text style={styles.cardNumber}>{item.cardNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.orderSummary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Order</Text>
          <Text style={styles.summaryValue}>₹{orderTotal}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping Charge</Text>
          <Text style={styles.summaryValue}>₹{shippingFee}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabelBold}>TOTAL</Text>
        <Text style={styles.summaryValueBold}>₹{totalWithShipping}</Text>
      </View>  
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Payment</Text>
      <FlatList
        data={paymentMethods}
        renderItem={renderPaymentMethod}
        keyExtractor={(item) => item.id}
        style={styles.paymentList}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.checkmarkContainer}>
              <Text style={styles.checkmark}>✔</Text>
            </View>
            <Text style={styles.modalText}>Payment done successfully.</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Add navigation options for the header
PaymentScreen.navigationOptions = {
  title: 'Checkout',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeft: undefined,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  orderSummary: {
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
  },
  summaryLabelBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  summaryValueBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentList: {
    flexGrow: 0,
    marginTop: 16,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  paymentIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  cardNumber: {
    fontSize: 14,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#FF0000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  checkmarkContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FF0000',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkmark: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
