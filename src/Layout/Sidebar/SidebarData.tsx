import { ReactComponent as UserFriends1 } from '../../assets/svg/user-friends 1.svg'
import { ReactComponent as Users1 } from '../../assets/svg/users 1.svg'
import { ReactComponent as Group104 } from '../../assets/svg/Group 104.svg'
import { ReactComponent as Sack1 } from '../../assets/svg/sack 1.svg'
import { ReactComponent as UserCheck1 } from '../../assets/svg/user-check 1.svg'
import { ReactComponent as UserTimes1 } from '../../assets/svg/user-times 1.svg'
import { ReactComponent as PiggyBank } from '../../assets/svg/piggy-bank 1.svg'
import { ReactComponent as Handshake } from '../../assets/svg/handshake-regular 1.svg'
import { ReactComponent as Briefcase1 } from '../../assets/svg/briefcase 2.svg'
import { ReactComponent as Bank1 } from '../../assets/svg/bank 1.svg'
import { ReactComponent as CoinSolid1 } from '../../assets/svg/coins-solid 1.svg'
import { ReactComponent as Icon } from '../../assets/svg/icon.svg'
import { ReactComponent as Galaxy1 } from '../../assets/svg/galaxy 1.svg'
import { ReactComponent as UserCog } from '../../assets/svg/user-cog 1.svg'
import { ReactComponent as Scroll1 } from '../../assets/svg/scroll 1.svg'
import { ReactComponent as ChartBar } from '../../assets/svg/chart-bar 2.svg'
import { ReactComponent as Sliders } from '../../assets/svg/sliders-h 1.svg'
import { ReactComponent as BadgePercent } from '../../assets/svg/badge-percent 1.svg'
import { ReactComponent as ClipboardList } from '../../assets/svg/clipboard-list 1.svg'

export type dataType = {
    icon: JSX.Element;
    text: string;
}

export const customerData: dataType[] = [
    {
        icon: <UserFriends1 />,
        text: 'Users'
    },
    {
        icon: <Users1 />,
        text: 'Guarantors'
    },
    {
        icon: <Sack1 />,
        text: 'Loans'
    },
    {
        icon: <Handshake />,
        text: 'Decision Models'
    },
    {
        icon: <PiggyBank />,
        text: 'Savings'
    },
    {
        icon: <Group104 />,
        text: 'Loan Requests'
    },
    {
        icon: <UserCheck1 />,
        text: 'Whitelist'
    },
    {
        icon: <UserTimes1 />,
        text: 'Karma'
    }
]

export const businessData: dataType[] = [
    {
        icon: <Briefcase1 />,
        text: 'Organization'
    },
    {
        icon: <Group104 />,
        text: 'Loan Products'
    },
    {
        icon: <Bank1 />,
        text: 'Savings Products'
    },
    {
        icon: <CoinSolid1 />,
        text: 'Fees & Charges'
    },
    {
        icon: <Icon />,
        text: 'Transactions'
    },
    {
        icon: <Galaxy1 />,
        text: 'Services'
    },
    {
        icon: <UserCog />,
        text: 'Service Account'
    },
    {
        icon: <Scroll1 />,
        text: 'Settlements'
    },
    {
        icon: <ChartBar />,
        text: 'Reports'
    }
]

export const settingData: dataType[] = [
    {
        icon: <Sliders />,
        text: 'Preference'
    },
    {
        icon: <BadgePercent />,
        text: 'Fees and Pricing'
    },
    {
        icon: <ClipboardList />,
        text: 'Audit Logs'
    }
]