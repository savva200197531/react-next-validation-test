export default function validateInfo(values) {
  let errors = {}

  let arr = values.fio.split(' ')
  arr = arr.filter(item => item.trim() !== '')

  if (!values.fio.trim()) {
    errors.fio = 'Заполните поле имя и фамилия'
  } else if (!/^[а-яё -]+$/i.test(values.fio)) {
    errors.fio = 'Вы неверно указали имя и фамилию'
  } else if (arr.length < 2 ) {
    errors.fio = 'Поле должно содержать больше 1 слова'
  } else if (arr.length > 3) {
    errors.fio = 'Поле не должно превышать 3х слов'
  }

  if (!values.email.trim()) {
    errors.email = 'Заполните поле email'
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = 'Вы неверно указали email';
  }

  if (!values.number.trim()) {
    errors.number = 'Заполните поле номер'
  } else if (values.number.trim().length < 16) {
    errors.number = 'Вы неверно указали номер'
  }

  return errors
}
