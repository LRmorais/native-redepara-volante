import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, {
  Capability,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

import Ionicons from 'react-native-vector-icons/FontAwesome5';

interface Props {
  playButton: boolean;
  circleProgressColor: string;
  initialProgressColor: string;
  valuesProgressColor: string;
}

const songs = {
  title: 'Musica teste',
  artist: 'sei la',
  url: require('../../assets/tracks/track1.mp3'),
  id: 1,
};

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};

const togglePlayback = async playbackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

export function MusicPlayer({
  playButton,
  circleProgressColor,
  initialProgressColor,
  valuesProgressColor,
}: Props) {
  const [repeatMode, setRepeatMode] = useState('repeat');
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const changeRepeatMode = () => {
    if (repeatMode === 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
    }
  };

  useEffect(() => {
    setupPlayer();
    changeRepeatMode();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: valuesProgressColor, fontSize: 15}}>
          {new Date(progress.position * 1000).toISOString().substr(14, 5)}
        </Text>
        <Slider
          style={{width: 200, height: 0}}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor={circleProgressColor}
          minimumTrackTintColor={initialProgressColor}
          maximumTrackTintColor="#000"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />

        <Text style={{color: valuesProgressColor, fontSize: 15}}>
          {new Date(progress.duration * 1000).toISOString().substr(14, 5)}
        </Text>
      </View>
      {playButton ? (
        <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
          <Ionicons
            color="#EF3C35"
            size={50}
            name={playbackState === State.Playing ? 'pause-circle' : 'play'}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 20,
    // backgroundColor: '#f0ffff',
  },
});
