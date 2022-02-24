import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={{uri:'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/02/26695d6c62ab0f75919485fe3c22c67d-1.jpg'}}
                 style={styles.image}/>
          <Text style={styles.text}>110819016</Text>
          <Text style={styles.text}>許靖宜</Text>
        </View>
        <View>
          <Image source={{uri:'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/02/26695d6c62ab0f75919485fe3c22c67d-1.jpg'}}
                 style={styles.image}/>
          <Text style={styles.text}>110819016</Text>
          <Text style={styles.text}>許靖宜</Text>
        </View>
        <View>
          <Image source={{uri:'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/02/26695d6c62ab0f75919485fe3c22c67d-1.jpg'}}
                 style={styles.image}/>
          <Text style={styles.text}>110819016</Text>
          <Text style={styles.text}>許靖宜</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0dfe4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 10,
    color: 'rgba(104,26,26,0.89)',
    fontSize: 30,
  },

  image: {
    width: "100%",
    height: 200,
    borderColor: 'rgba(241,200,200,0.73)',
    borderWidth:2,
  },
});
