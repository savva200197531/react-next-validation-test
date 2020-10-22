import styles from '../../styles/UserNavHeader.module.css'
import ring from '../../images/ring.svg'
import avatar from '../../images/avatar.svg'
import Box from '@material-ui/core/Box';
import useCapitalize from '../../hooks/useCapitalize';

export default function UserNavHeader({ initials }) {

  const capitalize = useCapitalize(initials)

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end">
      <img className={ styles.ring } src={ ring } alt=""/>
      <div className={ styles.stick }/>
      <img className={ styles.avatar } src={ avatar } alt=""/>
      <span className={ styles.initials }>{ capitalize }</span>
    </Box>
  )
}
