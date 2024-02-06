import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MenuSection from '../components/Menu';
import RecentTransactionsSection from '../components/RecentTransactionsSection';
import Bottom from '../components/BottomTabNavigator';

const HomePage = () => {
  const userImageURL = require('../assets/user.png');
  const userName = 'John Doe';
  const availableBalance = '₦5,000.00';
  const imagePath = require('../assets/Banknotes.png');
  const imagePath1 = require('../assets/Cash.png');

  return (
    <View style={styles.home}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.main}>
          <View style={styles.container}>
            <LeftSection userImageURL={userImageURL} />
            <CenterSection userName={userName} />
            <RightSection />
          </View>

          <View style={styles.availableBalanceSection}>
            <Text style={styles.availableBalanceText}>Available balance</Text>
            <Text style={styles.balanceAmount}>{availableBalance}</Text>
          </View>

          <MenuSection />

        </View>

        <RecentTransactionsSection />

        <View style={styles.paymentSection}>
          <Text style={styles.paymentText}>Pay with easy</Text>
          <PaymentImages imagePath={imagePath} imagePath1={imagePath1} />
        </View>

        <Bottom />
      </ScrollView>
    </View>
  );
};

const LeftSection = ({ userImageURL }) => (
  <View style={styles.leftSection}>
    <Image source={userImageURL} style={styles.userImage} />
  </View>
);

const CenterSection = ({ userName }) => (
  <View style={styles.centerSection}>
    <Text style={styles.welcomeText}>Welcome back, {userName}!</Text>
  </View>
);

const RightSection = () => (
  <View style={styles.rightSection}>
    <TouchableOpacity onPress={() => alert('Hamburger menu pressed')}>
      <Text style={styles.hamburgerIcon}>☰</Text>
    </TouchableOpacity>
  </View>
);

const PaymentImages = ({ imagePath, imagePath1 }) => (
  <View style={styles.imageContainer}>
    <Image source={imagePath} style={styles.paymentImage} />
    <Image source={imagePath1} style={styles.overlappingImage} />
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  main: {
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    paddingBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 36,
  },
  leftSection: {
    alignItems: 'flex-start',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  centerSection: {
    marginLeft: 16,
    justifyContent: 'center',
    backgroundColor: '#DA291C',
    borderRadius: 10,
    height: 30,
    width: 218,
    letterSpacing: -3,
  },
  welcomeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  hamburgerIcon: {
    fontSize: 40,
  },
  availableBalanceSection: {
    marginTop: 10,
    alignItems: 'center',
  },
  availableBalanceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  balanceAmount: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 4,
  },
  paymentSection: {
    backgroundColor: '#DA291C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
    paddingTop: 2,
    paddingBottom: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  paymentImage: {
    width: 70,
    height: 57,
    marginRight: 10,
  },
  overlappingImage: {
    position: 'absolute',
    left: 33,
    bottom: 1,
    width: 70,
    height: 60,
  },
  paymentText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F2A900',
  },
});

export default HomePage;
