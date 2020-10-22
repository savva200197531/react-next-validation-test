import UserPage from '../components/user/UserPage';
import FormSignup from '../components/form/FormSignup';

const Form = ({userInfo, userNav}) => {
  return (
    <>
      <UserPage userInfo={userInfo} userNav={ userNav }>
        <FormSignup userInfo={userInfo}/>
      </UserPage>
    </>
  )
}

export default Form
