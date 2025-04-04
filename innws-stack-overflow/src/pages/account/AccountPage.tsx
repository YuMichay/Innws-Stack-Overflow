import { useProfile } from "../../entities/user/api/getProfileInfo";
import { EditAccountInfo } from "../../features";
import { GreetingTypography } from "../../shared";
import { Account } from "../../widgets";

const AccountPage: React.FC = () => {
  const userProfile = useProfile().data;

  return (
    <div className="page__account">
      <GreetingTypography text={`Welcome, ${userProfile?.username}!`} />
      <Account />
      <EditAccountInfo />
    </div>
  )
}

export default AccountPage;