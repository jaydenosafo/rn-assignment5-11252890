import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Transaction from '../Transaction.json';

const HomePage = ({route}) => {

  const data = Transaction[0];

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
        <Image source={require('../assets/profile.png')}/>
        <View style={styles.text}>
           <Text style={styles.welcome}>Welcome back,</Text>
           <Text style={styles.name}>Eric Atsu</Text>
        </View>
        </View>
        <View style={styles.search}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
        </View>
      </View>
       
      <View style={styles.card}>
          <Image source={require('../assets/Card.png')} style={styles.cardIcon}/>
      </View>

      <View style={styles.buttons}>
      <View style={styles.belowCard}>
        <View style={styles.buttonContainer}>
        <Image source={require('../assets/send.png')}/>
        </View>
        <Text style={styles.buttonText}>Sent</Text>
      </View>
      <View style={styles.belowCard}>
        <View style={styles.buttonContainer}>
        <Image source={require('../assets/recieve.png')}/>
        </View>
        <Text style={styles.buttonText}>Receive</Text>
      </View>
      <View style={styles.belowCard}>
        <View style={styles.buttonContainer}>
        <Image source={require('../assets/loan.png')}/>
        </View>
        <Text style={styles.buttonText}>Loan</Text>
      </View>
      <View style={styles.belowCard}>
        <View style={styles.buttonContainer}>
        <Image source={require('../assets/topUp.png')}/>
        </View>
        <Text style={styles.buttonText}>TopUp</Text>
      </View>
      
      </View>

      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transaction}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.transactionButton}>Sell All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList
         data={transaction}
         renderItem={({item}) => (
          <TransactionCard
            name={item.name}
            category={item.category}
            price={item.price}
            logo={getLogoSource(item.name)}
          />
         )}
        />
      </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 20
  },
  welcome: {
    fontSize: 16,
    color: '#888',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  search: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIcon: {
    width: 20,
    height: 20
  },
  card: {
    marginLeft: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
    padding: 40
  },
  belowCard: {
    alignItems: 'center'
  },
  buttonContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#eee",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flexDirection: 'column'
  },
  buttonText: {
    alignItems: 'center'
  },
  transactionContainer: {},
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5
  }
});

export default HomePage;
  
 
