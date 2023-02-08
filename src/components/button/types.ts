import { TouchableOpacityProps } from 'react-native'

type ButtonType = 'primary' | 'secondary' | 'error';

export interface IButton extends TouchableOpacityProps {
  type: ButtonType;
  loading?: boolean;
  title: string;
}
