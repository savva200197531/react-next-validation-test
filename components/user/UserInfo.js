import { Box, Card } from '@material-ui/core';
import style from '../../styles/UserInfo.module.css'
import dog from '../../images/dog.svg'
import phone from '../../images/phone.svg'

const UserInfo = ({ userInfo }) => {

  return (
    <>
      <Card className={ style.card }>
        <Box display={ 'flex' } alignItems={ 'center' } className={ style.cardInfo }>
          <img className={style.cardImg} src={dog} alt=""/>
          <p className={style.cardText}>{ userInfo.email }</p>
        </Box>
        <Box display={ 'flex' } alignItems={ 'center' } className={ style.cardInfo }>
          <img className={style.cardImg} src={phone} alt=""/>
          <p className={style.cardText}>{ userInfo.phone }</p>
        </Box>
      </Card>
    </>
  )
}

export default UserInfo
