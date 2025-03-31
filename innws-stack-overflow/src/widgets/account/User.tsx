import { UserInfo, UserStatistic } from "../../entities";

const User: React.FC = () => {
  return (
    <div className="user-wrapper">
      <UserInfo />
      <UserStatistic />
    </div>
  )
};

export default User;