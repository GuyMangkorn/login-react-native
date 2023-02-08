import { useFormik } from 'formik'
import { createContext, ProviderProps, useCallback, useContext, useState } from 'react'
import * as yup from 'yup'

import { loginHandler } from '../services/auth'
import { FormikType, IContextValue, InputType, User } from '../types/authContextTypes'

const validateSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(1).required()
})

const AuthContext = createContext<IContextValue | null>(null)

export const AuthProvider = (props: ProviderProps<IContextValue | null>): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const formik = useFormik<FormikType>({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: validateSchema,
    onSubmit: (value) => onLoginHandler(value.email, value.password)
  })

  const [user, setUser] = useState<User>({ email: '' })

  const onChangeHandler = async (type: InputType, value: string): Promise<void> => {
    switch (type) {
    case 'email':
      formik.setFieldValue('email', value)
      break
    case 'password':
      formik.setFieldValue('password', value)
      break
    }
  }

  const onLoginHandler = useCallback(async (email: string, password: string): Promise<void> => {
    try {
      setIsSuccess(false)
      setIsError(false)
      setLoading(true)
      await loginHandler(email, password)
      setUser({ email })
      setIsSuccess(true)
    } catch (_) {
      setIsSuccess(false)
      setIsError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  const resetAuth = (): void => {
    formik.resetForm()
    setLoading(false)
    setIsError(false)
    setIsSuccess(false)
    setUser({ email: '' })
  }

  const value: IContextValue = {
    user,
    onChangeHandler,
    isSuccess,
    isError,
    value: formik.values,
    error: formik.errors,
    handleSubmit: formik.handleSubmit,
    loading,
    resetAuth
  }

  return (
    <AuthContext.Provider value={value} >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)


