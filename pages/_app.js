import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  if (typeof window !== 'undefined' && localStorage.getItem('userData')) {
    let userData = JSON.parse(localStorage.getItem('userData'))
    pageProps = {
      userInfo: {
        fio: userData.fio,
        email: userData.email,
        phone: userData.number
      },
      userNav: {
        title: 'Личный профиль',
        nav: 'Главная/Личный профиль'
      }
    }
  } else {
    pageProps = {
      userInfo: {
        fio: 'Иванова Анна Михайловна',
        email: 'Ivanova@mail.ru',
        phone: 'Укажите номер телефона'
      },
      userNav: {
        title: 'Личный профиль',
        nav: 'Главная/Личный профиль'
      }
    }
  }

  return <Component { ...pageProps } />
}

export default MyApp
