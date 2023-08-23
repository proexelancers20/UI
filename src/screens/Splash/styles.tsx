import { StyleSheet } from 'react-native';
import colors from "../../helper/colors";
import { FontFamily } from "../../helper/helper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
      wrappText: {
        fontSize: 85,
        fontFamily: FontFamily.bold,
      },
})

export default styles;