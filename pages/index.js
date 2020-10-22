import UserPage from '../components/user/UserPage';
import UserInfo from '../components/user/UserInfo';

export default function Home({userInfo, userNav}) {

  return (
    <div>
      <UserPage userInfo={ userInfo } userNav={ userNav }>
        <UserInfo userInfo={ userInfo }/>
      </UserPage>
    </div>
  )
}
