/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';


export default class Input extends Component {

  constructor(props){
    super(props);
    this.state = {
      doc1: "",
      doc2: "",
      doc3: "",
      doc4: "",
      query: ""
    }
  }

  getIndex(str,substring, resultString){
    let doctokens = str.split(" ");
    console.log('docTockens', doctokens)

        for (let i = 0; i < doctokens.length; i++) {

            if (doctokens[i] == substring) {
                resultString += "\t" + i;
            }
        }

        resultString += resultString + '\n';

  }


  positionalIndexAlgo(){

    let {doc1, doc2, doc3, doc4, query} = this.state;

    let docs= [];
    docs.push(doc1,doc2,doc3,doc4);
    let tokens = query.split(" ");
    let resultString ;

    for(let i=0; i<4; i++){
            if (docs[i].includes(query)) {
              console.log('true')
              resultString += query + " match doc number " + (i + 1) + '\n';
            }
            for (let j = 0; j < tokens.length; j++) {
                if (docs[i].includes(tokens[j])) {
                    resultString += "Found " + tokens[j] + " in doc " + (i + 1) + " at index ";
                     //this.getIndex(docs[i], tokens[j], resultString);
                      let doctokens = docs[i].split(" ");

                      for (let i = 0; i < doctokens.length; i++) {

                            if (doctokens[i] == tokens[j]) {
                            console.log('Ereeny')
                            resultString += '\t' + i + '\n';
                            }
                      }

                }
            }


        }
    console.log('resultString', resultString)

  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: 'yellow', alignItems: 'center'}}>

          <Text style={{textAlign: 'center', marginTop: 20, fontSize:30,
           fontWeight: 'bold' }}> Positional Index Algorithm</Text>

          <TextInput
          style={{width: 250, height: 40, margin: 25}}
          placeholder="Document 1"
          onChangeText={(doc1) => this.setState({doc1: doc1.toLowerCase()})}
        />
         <TextInput
          style={{width: 250, height: 40, margin: 25}}
          placeholder="Document 2"
          onChangeText={(doc2) => this.setState({doc2: doc2.toLowerCase()})}
        />
         <TextInput
          style={{width: 250, height: 40, margin: 25}}
          placeholder="Document 3"
          onChangeText={(doc3) => this.setState({doc3: doc3.toLowerCase()})}
        />
         <TextInput
          style={{width: 250, height: 40, margin: 25}}
          placeholder="Document 4"
          onChangeText={(doc4) => this.setState({doc4: doc4.toLowerCase()})}
        />
         <TextInput
          style={{width: 250, height: 40, margin: 25}}
          placeholder="Query"
          onChangeText={(query) => this.setState({query: query.toLowerCase()})}
        />

        <TouchableOpacity style={{width: 150, height:40, borderRadius: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}
        onPress= {() => this.positionalIndexAlgo()}>
        <Text style={{color: 'grey', fontSize: 15, textAlign: 'center'}}>Run</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
