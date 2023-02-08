import { makeStyles } from '@rneui/themed'

import { fonts } from './../../theme'

export default makeStyles((theme) => ({
  h1: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 64,
  },
  h2: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 48,
  },
  h3: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 36,
  },
  h4: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 24,
  },
  h5: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 20,
  },
  h6: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 16,
  },
  h7: {
    fontFamily: fonts.fontFamilyBold,
    fontSize: 14,
  },
  bold: {
    fontFamily: fonts.fontFamilySemiBold,
    fontSize: 16,
  },
  label: {
    fontFamily: fonts.fontFamilyDefault,
    fontSize: 16,
  },
  error: {
    fontFamily: fonts.fontFamilyDefault,
    fontSize: 14,
    color: theme.colors.error
  },
}))
