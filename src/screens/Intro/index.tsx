import React, { useState } from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { Container } from './styles';

const slide = [
  {
    key: '1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../assets/images/intro1.png'),
  },
  {
    key: '2',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../assets/images/intro2.png'),
  },
  {
    key: '3',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../assets/images/intro3.png'),
  },
];

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    // backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // [...]
});

export function Intro({ navigation }){
  const [showHome, setShowHome] = useState(false);

  const _renderNextButton = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: '#E9E9E9' }}>Pular</Text>
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-forward-outline"
          color="#EF3C35"
          size={24}
        />
      </View>
    </View>
  );

  const _renderDoneButton = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: '#E9E9E9' }}>Vamos lá</Text>
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="#EF3C35"
          size={24}
        />
      </View>
    </View>
  );

  function renderSlide({ item }) {
    return (
      <View style={{ flex: 1, backgroundColor: '#303233', alignItems: 'center' }}>
        <Image source={item.image} style={{ resizeMode: 'contain', height: '73%' }} />
        <Text style={{ color: '#E9E9E9', fontSize: 18, width: '80%' }}>{item.text}</Text>
      </View>
    );
  }

  if (showHome) {
    return <Text>Home</Text>;
  }
  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slide}
      activeDotStyle={{
        backgroundColor: '#FF4949',
        width: 25,
      }}
      dotStyle={{ backgroundColor: '#E9E9E9' }}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      onDone={() => navigation.navigate('Signin')}
    />
  );
};
