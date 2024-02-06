// MenuSection.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQrcode, faMoneyBill, faWallet, faShoppingCart  } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigation } from '@react-navigation/native';


const MenuItem = ({ icon, title, navigateTo }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} style={styles.icon} />
      </View>
      <Text style={styles.menuTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const MenuSection = () => {
  return (
    <View style={styles.menuSectionContainer}>
      <MenuItem
        icon={faQrcode}
        title="Scan"
        navigateTo="ScanScreen"
      />
      <MenuItem
        icon={faMoneyBill}
        title="Pay"
        navigateTo="Menu2Screen"
      />
      <MenuItem
        icon={faWallet}
        title="Fund Wallet"
        navigateTo="CartScreen"
      />
      <MenuItem
        icon={ faShoppingCart }
        title="Cart"
        navigateTo="AnalyticsScreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#DA291C', 
    borderRadius: 15, 
    overflow: 'hidden', 
    paddingVertical: 10, 
    marginHorizontal: 20, 
    marginTop: 30,
  },
  menuItem: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: 'white', 
  },
  menuTitle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MenuSection;
