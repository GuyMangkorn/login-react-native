import { CreateThemeOptions } from '@rneui/themed'

interface ITheme extends CreateThemeOptions {
  colors: any;
}

export interface Fonts {
  fontFamilyDefault: string;
  fontFamilyThin: string;
  fontFamilySemiBold: string;
  fontFamilyBold: string;
}

export default <ITheme>{
  colors: {
    primary: '#3f6af9',
    secondary: '#6585f0',
    searchBg: '#FFFFFF',
    fontDefault: '#263238',
    error: '#d45555',
    shadows: 'rgba(0,0,0,0.6)',
    grey0: '#E6E6E6',
    grey1: '#D6D6D6',
    grey2: '#333333',
    white: '#FFFFFF',
  },
}

export const fonts: Fonts = {
  fontFamilyDefault: 'Prompt-Regular',
  fontFamilyThin: 'Prompt-Thin',
  fontFamilySemiBold: 'Prompt-SemiBold',
  fontFamilyBold: 'Prompt-Bold',
}
