import { FormikErrors } from 'formik'

export type InputType = 'password' | 'email';

export type FormikType = {
  email: string;
  password: string;
};

export type User = {
  email: string;
};

export interface IContextValue {
  user: User;
  onChangeHandler: (type: InputType, value: string) => void;
  isError: boolean;
  error: FormikErrors<FormikType>;
  isSuccess: boolean;
  value: FormikType;
  loading: boolean;
  handleSubmit: () => void;
  resetAuth: () => void;
}
