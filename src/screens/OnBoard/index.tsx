import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import colors from '../../helper/colors';
import {CommonString, FontFamily, FontSize} from '../../helper/helper';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { NavigationProps } from '../../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface OnboardListProps {
  icon: any;
  title: string;
  titleDec: string;
}

const OnboardList: OnboardListProps[] = [
  {
    icon: require('../../assets/images/Onboard.png'),
    title: CommonString.Make_Friends,
    titleDec: CommonString.Make_Friends_Dec,
  },
  {
    icon: require('../../assets/images/Onboard1.png'),
    title: CommonString.Find_Events,
    titleDec: CommonString.Find_Events_Dec,
  },
  {
    icon: require('../../assets/images/Onboard2.png'),
    title: CommonString.Let_Begin,
    titleDec: CommonString.Let_Begin_Dec,
  },
];

type OnBoardScreenProps = NativeStackScreenProps<NavigationProps, 'OnBoardScreen'>;

const OnBoardScreen: React.FC<OnBoardScreenProps> = ({ navigation }) => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Pressable testID='skipButton' onPress={() => { navigation.navigate('WelcomeScreen') }} style={styles.skipButton}>
          <Text style={styles.continueText}>Skip</Text>
          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/RightArrow.png')}
          />
        </Pressable>
        <Swiper
          onIndexChanged={(index) => {setSwiperIndex(index)}}
          loop={false}
          style={{}}
          showsButtons={false}>
          <View style={styles.SwiperView}>
            <Image style={styles.smileIcon} source={OnboardList[0].icon} />
            <Text style={styles.MakeFriendText}>{OnboardList[0].title}</Text>
            <Text style={styles.MakeFriendDecText}>
              {OnboardList[0].titleDec}
            </Text>
          </View>
          <View style={styles.SwiperView}>
            <Image style={styles.smileIcon} source={OnboardList[1].icon} />
            <Text style={styles.MakeFriendText}>{OnboardList[1].title}</Text>
            <Text style={styles.MakeFriendDecText}>
              {OnboardList[1].titleDec}
            </Text>
          </View>
          <View style={styles.SwiperView}>
            <Image style={styles.smileIcon} source={OnboardList[2].icon} />
            <Text style={styles.MakeFriendText}>{OnboardList[2].title}</Text>
            <Text style={styles.MakeFriendDecText}>
              {OnboardList[2].titleDec}
            </Text>
          </View>
        </Swiper>
      </View>
      <View style={styles.continueView}>
        <Pressable style={styles.continueButton}>
          <Text style={styles.continueText}>{swiperIndex == 2 ? "Explore" : 'Continue'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoardScreen;
