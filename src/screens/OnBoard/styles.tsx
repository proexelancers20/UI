import {StyleSheet} from 'react-native';
import colors from '../../helper/colors';
import {FontFamily, FontSize} from '../../helper/helper';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
  },
  smileIcon: {
    width: scale(262),
    height: scale(262),
    marginBottom: verticalScale(70),
  },
  MakeFriendText: {
    fontSize: FontSize.Size_32,
    fontWeight: '700',
    color: colors.black,
    fontFamily: FontFamily.semiBold,
    marginBottom: verticalScale(12),
  },
  MakeFriendDecText: {
    fontSize: FontSize.Size_16,
    fontWeight: '400',
    color: colors.semiBlack,
    fontFamily: FontFamily.regular,
    textAlign: 'center',
    marginHorizontal: scale(32),
  },
  continueButton: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    backgroundColor: colors.lightPink,
  },
  continueText: {
    fontSize: FontSize.Size_14,
    fontWeight: '700',
    color: colors.black,
  },
  mainView: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  skipButton: {
    position: 'absolute',
    top: 0,
    paddingVertical: 10,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  arrowIcon: {
    width: scale(16),
    height: scale(11),
    marginHorizontal: scale(10),
  },
  continueView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SwiperView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
