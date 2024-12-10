import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  asyncCalculation,
  asyncVopt,
  getuuid,
} from 'react-native-takahashi-test-library';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    asyncVopt({ opt_1: 'aaa' });
    getuuid().then(function (id) {
      console.log(id);
    });
    asyncCalculation(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
