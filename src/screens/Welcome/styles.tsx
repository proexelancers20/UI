import {StyleSheet} from 'react-native';
import colors from '../../helper/colors';
import {FontFamily, FontSize} from '../../helper/helper';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  teams: {
    fontSize: FontSize.Size_16,
    fontWeight: '500',
    color: colors.black,
    fontFamily: FontFamily.semiBold,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
