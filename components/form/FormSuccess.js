import styleFormSignup from '../../styles/FormSignup.module.css';
import styleFormSure from '../../styles/FormSure.module.css';
import style from '../../styles/FormSuccess.module.css'
import classes from 'classnames';
import { Spring } from 'react-spring/renderprops-universal';

const FormSuccess = ({ sureSubmitForm }) => {
  return (
    <div onClick={ () => {
      sureSubmitForm(false)
    } } className={ styleFormSure.modalWrapper }>
      <Spring
        from={ { bottom: -500, opacity: 0 } }
        to={ { bottom: 0, opacity: 1 } }
        config={ { delay: 200 } }
      >
        { props => (
          <div style={props} className={ classes(style.modal) }>
            <h1 className={ style.title }>Данные успешно сохранены</h1>
            <button className={ classes(style.button, styleFormSure.button, styleFormSignup.button) } name={ 'yes' }
                    onClick={ () => {
                      sureSubmitForm(false)
                    } }>Хорошо
            </button>
          </div>
        )}
      </Spring>
    </div>
  )
}

export default FormSuccess
