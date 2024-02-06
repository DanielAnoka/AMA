import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecentTransactionItem = ({ image, name, price, dateTime }) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: image }} style={styles.transactionImage} />
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>{name}</Text>
          <Text style={styles.transactionDateTime}>{dateTime}</Text>
        </View>
      </View>
      <Text style={styles.transactionPrice}>{price}</Text>
    </View>
  );
};

const RecentTransactionsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <RecentTransactionItem
        image="https://example.com/transaction-image1.jpg"
        name="Power Oil"
        price="₦9,000.00"
        dateTime="2022-02-14 10:30 AM"
      />
      <RecentTransactionItem
        image="https://example.com/transaction-image2.jpg"
        name="Wallet Top up"
        price="₦100,000.00"
        dateTime="2022-02-13 05:45 PM"
      />
      <RecentTransactionItem
        image="https://example.com/transaction-image2.jpg"
        name="Bag of Rice"
        price="₦40,000.50"
        dateTime="2022-02-13 05:45 PM"
      />
      <RecentTransactionItem
        image="https://example.com/transaction-image2.jpg"
        name="Pure Heaven Wine"
        price="₦4,500.00"
        dateTime="2022-02-13 05:45 PM"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    overflow: 'hidden',
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2A900',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'rgba(238, 205, 131, 0.24)',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 15,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA291C',
  },
  transactionDateTime: {
    fontSize: 12,
    color: '#DA291C',
  },
  transactionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA291C',
  },
});

export default RecentTransactionsSection;
