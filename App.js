import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  Dimensions,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState("");

  const changeHandler = (val) => {
    setNumber(val);
  };

  const submitHandler = () => {
    is_perfect(parseInt(number));
    setNumber('');
  };

  function keyPress(e) {
    if (e.keyCode == 13) {
      e.target.submitHandler;
    }
  }

  function is_perfect(num) {
    var temp = 0;

    if (num < 0 || isNaN(num) || num === undefined) {
      return Alert.alert('lighthouse-team', 'Please enter positive number');
    } else {
      for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
          temp += i;
        }
      }

      if (temp === num && temp !== 0) {
        Alert.alert(
          'lighthouse-team',
          'Congratulations, it is a perfect number !!!',
        );
      } else {
        Alert.alert('lighthouse-team', 'It is not a perfect number !');
      }
    }
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./src/img/perfect-numbers.jpg')}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.numberInput}
            keyboardType="number-pad"
            // selectTextOnFocus={true}
            value={number}
            autoFocus={true}
            placeholder="Please input a number..."
            placeholderTextColor="#777"
            onSubmitEditing={() => {
              submitHandler(number);
              setNumber('');
            }}
            onChangeText={changeHandler}
            onChangeText={(val) => {
              setNumber(val);
            }}
          />
          <Button
            style={styles.button}
            title="Is it perfect number ?"
            onPress={() => {
              submitHandler();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',

    // justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    width: Dimensions.get('window').width * 0.7,
    backgroundColor: '#ececec',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 20,
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  button: {
    width: Dimensions.get('window').width * 0.5,
  },
  imageContainer: {
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width * 0.9,
    margin: 10,
    resizeMode: 'cover',
  },
});

export default App;
