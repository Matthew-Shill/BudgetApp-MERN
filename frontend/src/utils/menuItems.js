import { dashboard, transactions, trend, expenses} from '../utils/icons';

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        path: '/dashboard'
    },
    {
        id: 2,
        title: 'Transactions',
        icon: transactions,
        path: '/transactions'
    },
    {
        id: 3,
        title: 'Income',
        icon: trend,
        path: '/Income'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        path: '/expenses'
    },
]