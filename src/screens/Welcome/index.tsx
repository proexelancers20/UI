import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import colors from '../../helper/colors';
import Button from '../../components/CommonButton';
import styles from './styles';
import {MicroAppsProps, NavigationProps} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type WelcomeScreenProps = MicroAppsProps &
  NativeStackScreenProps<NavigationProps, 'WelcomeScreen'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
            height: verticalScale(400),
          }}
          source={require('../../assets/images/welcome.png')}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 50}}>
        <Button
          ButtonTestId="Welcome_sign_up_button"
          title="Sign Up"
          ButtonStyle={{marginBottom: verticalScale(25)}}
        />
        <Button
          ButtonTestId="Welcome_create_profile_button"
          title="Create your profile"
          ButtonStyle={{
            backgroundColor: colors.white,
            borderWidth: 2,
            borderColor: colors.black,
          }}
        />
        <View
          style={{
            flexDirection: 'column-reverse',
            flex: 1,
            marginBottom: scale(20),
          }}>
          <Text style={styles.teams}>Terms & Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};
export default WelcomeScreen;
