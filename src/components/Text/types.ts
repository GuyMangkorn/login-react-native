import { TextProps as ReactNativeTextProps } from 'react-native'

export type TextType = 'h7' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | 'label' | 'error';

export interface TextProps extends ReactNativeTextProps {
  type: TextType;
}
