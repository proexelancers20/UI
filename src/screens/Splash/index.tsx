import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SplashIcon} from '../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';
import {CommonString} from '../../helper/helper';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationProps} from '../../navigation';

type SplashScreenProps = NativeStackScreenProps<
  NavigationProps,
  'SplashScreen'
>;

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoardScreen');
    }, 1500);
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* <SplashIcon width={scale(275)} height={verticalScale(60)} /> */}
      <Text testID="SplashWrapp" style={styles.wrappText}>
        {CommonString.SplashTitle}
      </Text>
    </View>
  );
};

export default SplashScreen;
