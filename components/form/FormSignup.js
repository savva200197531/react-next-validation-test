// img
import dog from '../../images/dog.svg';
import phone from '../../images/phone.svg';
import profile from '../../images/profile.svg'
// style
import style from '../../styles/FormSignup.module.css'
import Card from '@material-ui/core/Card';
import classes from 'classnames'
import InputMask from 'react-input-mask'
// state
import { useState } from 'react';
import validate from './validateInfo'
import useForm from '../../hooks/useForm';
// components
import FormSure from './FormSure';
import FormSuccess from './FormSuccess';

const FormSignup = () => {

  let { handleChange, values, handleSubmit, errors } = useForm(() => submitForm(true), validate)
  const [ isSubmitted, setIsSubmitted ] = useState(false)
  const [ isSure, setIsSure ] = useState(false)

  const submitForm = (bool) => {
    setIsSubmitted(bool)
  }

  const sureSubmitForm = (bool) => {
    setIsSure(bool)
  }

  return (
    <form className={ style.form } onSubmit={ handleSubmit }>
      <Card className={ style.cardWrapper }>
        <div className={ style.card }>
          <div className={ classes(style.inputWrapper) }>
            <img
              className={ style.inputImg }
              src={ profile }
              alt=""/>
            <input
              id={ 'fio' }
              name={ 'fio' }
              className={ classes(style.input, errors.fio && style.inputError) }
              type="text"
              placeholder={ 'Укажите ваши фамилию и имя' }
              value={ values.fio }
              onChange={ handleChange }
            />
            { errors.fio && <p className={ style.error }>{ errors.fio }</p> }
            <label
              className={ classes(style.label, errors.fio && style.labelError) }
              htmlFor="fio"
            >
              Фамилия и имя
            </label>
            <div className={ classes(style.borderInput, errors.fio && style.borderInputError) }/>
          </div>
          <div className={ style.border }/>
          <div className={ style.inputWrapper }>
            <img
              className={ style.inputImg }
              src={ dog }
              alt=""/>
            <input
              id={ 'email' }
              name={ 'email' }
              className={ classes(style.input, errors.email && style.inputError) }
              type="text"
              placeholder={ 'Ivanova@mail.ru' }
              value={ values.email }
              onChange={ handleChange }
            />
            { errors.email && <p>{ errors.email }</p> }
            <label
              className={ classes(style.label, errors.email && style.labelError) }
              htmlFor="email"
            >
              E-mail
            </label>
            <div className={ classes(style.borderInput, errors.email && style.borderInputError) }/>
          </div>
          <div className={ style.border }/>
          <div className={ style.inputWrapper }>
            <img
              className={ style.inputImg }
              src={ phone }
              alt=""/>
            <InputMask
              id={ 'number' }
              name={ 'number' }
              className={ classes(style.input, errors.number && style.inputError) }
              type="text"
              placeholder={ 'Укажите номер телефона' }
              value={ values.number }
              mask="+7 999 999 99 99"
              maskPlaceholder={''}
              onChange={ (event) => {
                handleChange(event)
              } }
            />
            { errors.number && <p>{ errors.number }</p> }
            <label
              className={ classes(style.label, errors.number && style.labelError) }
              htmlFor="number"
            >
              Номер телефона
            </label>
            <div className={ classes(style.borderInput, errors.number && style.borderInputError) }/>
          </div>
        </div>
        <div className={ style.buttonWrapper }>
          <button className={ style.button } type={ 'submit' }>Сохранить изменения</button>
        </div>
      </Card>
      { isSubmitted &&
      <FormSure submitForm={ submitForm } sureSubmitForm={ sureSubmitForm } values={ values }/> }
      { isSure &&
      <FormSuccess sureSubmitForm={ sureSubmitForm }/> }
    </form>
  )

}

export default FormSignup
