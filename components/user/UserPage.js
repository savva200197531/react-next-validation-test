import styles from '../../styles/UserPage.module.css'
import Head from 'next/head';
import UserNavHeader from './UserNavHeader';
import UserNav from './UserNav';
import UserCard from './UserCard';

const UserPage = ({ userInfo, userNav, children }) => {
  return (
    <>
      <Head>
        <title>Form validation!</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={ styles.container }>
        <div className={ styles.padding }>
          <UserNavHeader initials={ userInfo.fio }/>
          <UserNav userNav={ userNav }/>
          <UserCard fio={ userInfo.fio }/>
          { children }
        </div>
      </div>
    </>
  )
}

export default UserPage
