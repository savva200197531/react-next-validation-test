import { Box, Card } from '@material-ui/core';
import style from '../../styles/UserCard.module.css'
import avatar from '../../images/avatar.svg'
import pencil from '../../images/pencil.svg'
import cross from '../../images/cross.svg'
import Router from 'next/router';
import React from 'react';

class UserCard extends React.Component {
  state = {
    pencilImg: pencil,
    formOpen: 'Редактировать'
  }

  capitalize() {
    return this.props.fio.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu, ch => ch.toUpperCase())
  }

  componentDidMount() {
    if (Router.route === '/') {
      this.setState({ PencilImg: pencil, formOpen: 'Редактировать' })
    } else {
      this.setState({ pencilImg: cross, formOpen: 'Закрыть' })
    }
  }


  linkClickHandler = () => {
    if (Router.route === '/') {
      Router.push('/form')
    } else {
      Router.push('/')
    }
  }

  render() {
    return (
      <>
        <Card className={ style.card }>
          <Box color={ 'white' } className={ style.cardContent } display={ "flex" } alignItems={ "center" }>
            <img className={ style.avatar } src={ avatar } alt=""/>
            <h1 className={ style.fio }>{ this.capitalize() }</h1>
            <div onClick={ this.linkClickHandler } className={style.goToForm}>
              <p className={ style.redact }>{ this.state.formOpen }</p>
              <img className={ style.pencil } src={ this.state.pencilImg } alt=""/>
            </div>
          </Box>
        </Card>
      </>
    );
  }
}

export default UserCard
