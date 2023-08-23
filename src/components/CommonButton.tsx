import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {FontSize} from '../helper/helper';
import colors from '../helper/colors';
import {verticalScale} from 'react-native-size-matters';

interface ButtonProps {
  title: string;
  ButtonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  ButtonTestId?: string;
  TitleTestId?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  ButtonStyle,
  titleStyle,
  ButtonTestId,
  TitleTestId,
}) => {
  return (
    <Pressable testID={ButtonTestId} style={[styles.container, ButtonStyle]}>
      <Text testID={TitleTestId} style={[styles.title, titleStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    borderRadius: verticalScale(30),
    backgroundColor: colors.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.Size_14,
    fontWeight: '700',
    color: colors.black,
  },
});

export default Button;
