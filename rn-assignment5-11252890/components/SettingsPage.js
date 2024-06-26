import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SettingsPage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState =>!previousState);

  return (
    <View style={isEnabled? styles.containerDark : styles.containerLight}>
      <View style={styles.titleContainer}>
        <Text style={isEnabled? styles.titleDark : styles.titleLight}>Settings</Text>
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={isEnabled? styles.itemTextDark : styles.itemTextLight}>Language</Text>
          <AntDesign name="right" size={24} color={isEnabled? 'white' : 'grey'} />
        </TouchableOpacity>
        <View style={styles.line}/>

        <TouchableOpacity style={styles.item}>
          <Text style={isEnabled? styles.itemTextDark : styles.itemTextLight}>My Profile</Text>
          <AntDesign name="right" size={24} color={isEnabled? 'white' : 'grey'} />
        </TouchableOpacity>
        <View style={styles.line}/>

        <TouchableOpacity style={styles.item}>
          <Text style={isEnabled? styles.itemTextDark : styles.itemTextLight}>Contact Us</Text>
          <AntDesign name="right" size={24} color={isEnabled? 'white' : 'grey'} />
        </TouchableOpacity>
        <View style={styles.line}/>
        <TouchableOpacity style={styles.item}>
          <Text style={isEnabled? styles.itemTextDark : styles.itemTextLight}>Change Password</Text>
          <AntDesign name="right" size={24} color={isEnabled? 'white' : 'grey'} />
        </TouchableOpacity>
        <View style={styles.line}/>
        <TouchableOpacity style={styles.item}>
          <Text style={isEnabled? styles.itemTextDark : styles.itemTextLight}>Privacy Policy</Text>
          <AntDesign name="right" size={24} color={isEnabled? 'white' : 'grey'} />
        </TouchableOpacity>
        <View style={styles.line}/>

        <View style={isEnabled? styles.themeSwitchDark : styles.themeSwitchLight}>
          <Text style={isEnabled? styles.itemThemeDark : styles.itemThemeLight}>Theme</Text>
          <Switch
            trackColor={{false: '#767577', true: 'green'}}
            thumbColor={isEnabled? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line :{
    height: 1,
    backgroundColor: '#767577'
  },
  containerLight: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    backgroundColor: 'white'
  },
  containerDark: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    backgroundColor: 'black'
  },
  itemContainer: {
    marginTop: 40,
    gap: 10
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleLight: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
    color: 'black'
  },
  titleDark: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
    color: 'white'
  },
  item : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  itemTextLight: {
    fontSize: 16,
    color: 'black'
  },
  itemTextDark: {
    fontSize: 16,
    color: 'white'
  },
  themeSwitchLight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 30
  },
  themeSwitchDark: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    padding: 30
  },
  itemThemeLight: {
    fontSize: 16,
    marginRight: 10,
    color: 'black'
  },
  itemThemeDark: {
    fontSize: 16,
    marginRight: 10,
    color: 'white'
  }
});

export default SettingsPage;