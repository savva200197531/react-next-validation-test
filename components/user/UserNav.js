import { Box } from '@material-ui/core';
import style from '../../styles/UserNav.module.css'

const UserNav = ({userNav}) => {
  return (
    <>
      <Box color="white" className={style.userNav}>
        <h2 className={style.title}>{userNav.title}</h2>
        <p className={style.nav}>{userNav.nav}</p>
      </Box>
    </>
  )
}

export default UserNav
