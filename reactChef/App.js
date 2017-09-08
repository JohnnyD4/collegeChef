import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        label:'',
        password:''
        }

     }

  componentDidMount() {
    console.log("obj");
    return fetch("https://api.edamam.com/search?q=chicken,rice&app_id=63f8bc89&app_key=6102576183eb6fec6ef9ac523922c97c&from=0&to=1")
    
    .then(function(response){
        var res = JSON.parse(response._bodyText);
        console.log("body", res.hits[0].recipe.label);
        var label = res.hits[0].recipe.label;
        this.label = label;
        
        console.log("label", this.label);
        
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.label}</Text>
        <Text>Changes you make will aufdgdfgtomatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
          <Image source={{
              uri: 'https://www.edamam.com/web-img/42f/42f1805b2273113c029b41adadd36847.jpg'
              }
              
            }
            style={{width: 400, height: 400}} />
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
