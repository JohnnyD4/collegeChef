import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    console.log("obj");
    return fetch("https://api.edamam.com/search?q=chicken&app_id=63f8bc89&app_key=6102576183eb6fec6ef9ac523922c97c&from=1&to=1")
    .then((response) => console.log("body", response["_bodyText"]))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will aufdgdfgtomatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
