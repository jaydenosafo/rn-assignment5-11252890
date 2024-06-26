import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';



const HomePage = ({ route }) => {

 const data = [
  {
    id: '1',
    logo: require('../assets/apple.png'),
    name: 'Apple Store',
    category: 'Entertainment',
    price: '-$5,99'
  },
  {
    id: '2',
    logo: require('../assets/spotify.png'),
    name: 'Spotify',
    category: 'Entertainment',
    price: '-$12,99'
  },
  {
    id: '3',
    logo: require('../assets/moneyTransfer.png'),
    name: 'Money Transfer',
    category: 'Transaction',
    price: '$300'
  },
  {
    id: '4',
    logo: require('../assets/grocery.png'),
    name: 'Grocery',
    category: 'Grocery',
    price: '-$88'
  },
  {
    id: '5',
    logo: require('../assets/apple.png'),
    name: 'Apple Store',
    category: 'Entertainment',
    price: '-$5,99'
  },
 ]

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
            <View style={styles.text}>
              <Text style={styles.welcome}>Welcome back,</Text>
              <Text style={styles.name}>Eric Atsu</Text>
            </View>
          </View>
          <View style={styles.search}>
            <Image source={require('../assets/search.png')} style={styles.searchIcon} />
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/Card.png')} style={styles.cardIcon} />
        </View>

        <View style={styles.buttons}>
          <View style={styles.belowCard}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/send.png')} />
            </View>
            <Text style={styles.buttonText}>Sent</Text>
          </View>
          <View style={styles.belowCard}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/recieve.png')} />
            </View>
            <Text style={styles.buttonText}>Receive</Text>
          </View>
          <View style={styles.belowCard}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/loan.png')} />
            </View>
            <Text style={styles.buttonText}>Loan</Text>
          </View>
          <View style={styles.belowCard}>
            <View style={styles.buttonContainer}>
              <Image source={require('../assets/topUp.png')} />
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

        <View style={styles.flatList}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={styles.logoContainer}>
                  <Image source={item.logo} style={styles.logo}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.category}>{item.category}</Text>
                </View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
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
    padding: 10
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
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  cardIcon: {
  
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
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
  transactionContainer: {
    marginLeft: 18,
    marginRight: 30
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  transaction: {
    fontWeight: 'bold',
    fontSize: 20
  },
  transactionButton: {
    color: '#2B65EC',
    fontSize: 15
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  category: {
    color: '#888'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  flatList: {
    marginTop: 20
  }
});

export default HomePage;


