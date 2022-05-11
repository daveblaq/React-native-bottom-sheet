import { StatusBar } from 'expo-status-bar';
// import React in our code
import React, { useState } from 'react';
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
//import to show social icons
import { SocialIcon } from 'react-native-elements';
//import basic react native components
import { BottomSheet } from 'react-native-btr';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setVisible(!visible);
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Bottom Sheet in React Native
        </Text>
        <Button
          onPress={toggleBottomNavigationView}
          //on Press of the button bottom sheet will be visible
          title="Show Bottom Sheet"
          color={"#FFC817"}
        />
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={{marginVertical: 10, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <TouchableWithoutFeedback onPress={toggleBottomNavigationView}>
            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            <Ionicons name="close" size={24} color="#FFC817" />
            </View>
            </TouchableWithoutFeedback>
            </View>
            <View style={styles.bottomNavigationView}>
              <View
                style={{
                  marginVertical: 20,
                  height: 5,
                  width: 40,
                  borderRadius: 50,
                  backgroundColor: "#e3e3e3",
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    padding: 20,
                    fontSize: 20,
                  }}
                >
                  Share Using
                </Text>
              </View>
           
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
}


const deviceHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: deviceHeight - 190,
    justifyContent: "center",
    alignItems: "center",
  },
});

