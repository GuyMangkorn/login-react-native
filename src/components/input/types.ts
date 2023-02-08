import { TextInputProps } from 'react-native'

export interface ITextInputProps extends TextInputProps {
  label?: string;
  error?:boolean
  password?: boolean
}
