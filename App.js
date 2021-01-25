import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  TextInput,
  Linking,
} from 'react-native';

const App = () => {
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');

  const checkTextInput = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pass = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );

    if (reg.test(textInputEmail) === true) {
      console.log(' valid formate');
    } else {
      console.log('invalid formate');
    }

    if (pass.test(textInputPassword) === true) {
      console.log(' valid password formate');
    } else {
      console.log('invalid password formate');
    }
  };
  return (
    <View>
      <View>
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
          }}
          onPress={() => Linking.openURL('http://youtube.com')}>
          YouTube
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
          }}
          onPress={() => Linking.openURL('http://facebook.com')}>
          Facebook
        </Text>
        <Text
          style={{
            color: 'blue',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
          }}
          onPress={() => Linking.openURL('http://google.com')}>
          Google
        </Text>
      </View>

      <View style={{margin: 30}}>
        <TextInput
          placeholder="Enter Email"
          onChangeText={(value) => setTextInputEmail(value)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />

        <TextInput
          placeholder="Enter Password"
          onChangeText={(value) => setTextInputPassword(value)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <View style={{marginTop: 15}}>
          <Button title="Submit" onPress={checkTextInput} color="#606070" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});

export default App;
