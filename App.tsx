/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [count, setCount] = useState(0);

  let onIncrementPress = () => {
    setCount(count + 1);
  }

  let onDecrimentPress = () => {
    if (count > 0)
      setCount(count - 1);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title='Incriment Count +' onPress={onIncrementPress} />
      <Text> Counter {count}</Text>
      <Button title='Decrment Count -' onPress={onDecrimentPress} disabled={count == 0} />
    </SafeAreaView>
  );
}

export default App;
