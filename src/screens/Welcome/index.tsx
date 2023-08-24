import React from 'react';
import {View, Text, Image, Dimensions, Linking} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import colors from '../../helper/colors';
import Button from '../../components/CommonButton';
import styles from './styles';
import {NavigationProps} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type WelcomeScreenProps = NativeStackScreenProps<
  NavigationProps,
  'WelcomeScreen'
>;

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
          onPress={() => {}}
        />
        <Button
          ButtonTestId="Welcome_create_profile_button"
          title="Create your profile"
          ButtonStyle={styles.createProfileButton}
          onPress={() => {}}
        />
        <View style={styles.termsView}>
          <Text
            testID="terms_text_press"
            onPress={() => {
              Linking.openURL('https://policies.google.com/terms?hl=en-GB');
            }}
            style={styles.teams}>
            Terms & Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
};
export default WelcomeScreen;
