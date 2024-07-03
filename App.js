import React, { useState } from 'react';
import { View, TextInput, Button, Picker, Text } from 'react-native';
import figlet from 'figlet';

const App = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Standard');
  const [asciiArt, setAsciiArt] = useState('');

  const fonts = ['Standard', 'Ghost', 'Doom', 'Big'];

  const generateAsciiArt = () => {
    figlet.text(text, { font }, function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      setAsciiArt(data);
    });
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
      />
      <Picker selectedValue={font} onValueChange={(itemValue) => setFont(itemValue)}>
        {fonts.map((font) => (
          <Picker.Item key={font} label={font} value={font} />
        ))}
      </Picker>
      <Button title="Generate ASCII Art" onPress={generateAsciiArt} />
      <Text>{asciiArt}</Text>
    </View>
  );
};

export default App;
