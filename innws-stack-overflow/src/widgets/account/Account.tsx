import { AccountInfo, AccountStatistic } from "../../entities";

const Account: React.FC = () => {
  return (
    <div className="account">
      <AccountInfo />
      <AccountStatistic />
    </div>
  )
}

export default Account;