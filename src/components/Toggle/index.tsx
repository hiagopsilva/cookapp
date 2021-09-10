import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { MotiView, useAnimationState } from "moti";

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Toggle() {
  const toggleAnimationState = useAnimationState({
    closed: {
      height: 72
    },
    open: {
      height: 190,
    }
  })

  return (
    <MotiView style={styles.container} state={toggleAnimationState}>
      <Feather
        name="tag"
        color={theme.colors.white}
        size={26}
      />

      <View style={styles.info}>
        <Text style={styles.label}>
          Calories
        </Text>

        <Text style={styles.value}>
          150
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Weight
        </Text>

        <Text style={styles.value}>
          190g
        </Text>
      </View>
    </MotiView >
  );
}