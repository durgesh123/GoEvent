import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to GoEvent</Text>
        <Text>Sourab Sir, Hi How are you ?</Text>
        <Text>Mukesh Ji, Hi How are you ?</Text>
        <Text>Raj Babu, Factory se wapas aaye ?</Text>
        <Text>Aanand Babu, kabhi hume bhi yaad kar liya karo..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
