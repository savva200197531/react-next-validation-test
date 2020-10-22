import styleFormSignup from '../../styles/FormSignup.module.css'
import style from '../../styles/FormSure.module.css'
import classes from 'classnames'
import axios from 'axios'
import { Spring } from 'react-spring/renderprops-universal';

const FormSure = ({ sureSubmitForm, submitForm, values }) => {

  const finalSubmit = () => {
    sureSubmitForm(true)
    submitForm(false)
    const json = JSON.stringify(values)
    localStorage.setItem('userData', json)
    axios({
      method: 'post',
      url: 'http://jsonplaceholder.typicode.com/posts',
      data: { values },
      headers: {
        'Content-Type': 'application/json',
        'x-token-access': 'random'
      }
    }).catch(error => console.log(error))
  }

  return (
    <>
      <div className={ classes(style.modalWrapper) }>
        <Spring
          from={ { bottom: -500, opacity: 0 } }
          to={ { bottom: 0, opacity: 1 } }
          config={ { delay: 200 } }
        >
          { props => (
            <div style={ props } className={ classes(style.modal) }>
              <h1>Сохранить изменения?</h1>
              <svg onClick={ () => {
                submitForm(false)
              } } className={ style.close } width="14" height="14" viewBox="0 0 14 14" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#828282"/>
              </svg>
              <button
                className={ classes(style.button, styleFormSignup.button) }
                name={ 'yes' }
                onClick={ finalSubmit }>Сохранить
              </button>
              <button
                className={ classes(style.button, styleFormSignup.button) }
                name={ 'no' }
                onClick={ () => {
                  submitForm(false)
                } }>Не сохранять
              </button>
            </div>
          ) }
        </Spring>
      </div>
    </>
  )
}

export default FormSure
