import * as BiIcons from 'react-icons/bi'

const navbarData = [
    {
        text: 'Home',
        path: '/',
        icon: <BiIcons.BiSolidHome className='nav-icon' />

    },
    {
        text: 'About',
        path: '/about',
        icon: <BiIcons.BiSolidInfoCircle className='nav-icon' />
    },
    {
        text: 'Contact',
        path: '/contact',
        icon: <BiIcons.BiSolidContact className='nav-icon' />
    },
]

export default navbarData