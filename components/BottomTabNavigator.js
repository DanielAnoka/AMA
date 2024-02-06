import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faWallet, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ icon, title, navigateTo }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} style={[styles.icon, icon === faWallet && styles.yellowColor]} />
      </View>
      <Text style={[styles.menuTitle, icon === faWallet && styles.yellowColor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const MenuSection = () => {
  return (
    <View style={styles.menuSectionContainer}>
      <MenuItem icon={faUser} title="Profile" navigateTo="ProfileScreen" />
      <MenuItem icon={faWallet} title="Wallet" navigateTo="WalletScreen" />
      <MenuItem icon={faCog} title="Settings" navigateTo="SettingsScreen" />
    </View>
  );
};

const styles = StyleSheet.create({
  menuSectionContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
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
    color: '#DA291C',
    bottom: 12,
  },
  menuTitle: {
    marginTop: -15,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#DA291C',
  },
  yellowColor: {
    color: '#F2A900',
  },
});

export default MenuSection;
