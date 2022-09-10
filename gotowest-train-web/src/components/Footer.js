import React from 'react'
import Home from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footer'>
            <ul className='menu'>
                <li className='menu-item'>
                    <Link to='/' className='link'>
                        <Home></Home>
                        <br/>
                        홈
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link to='/choose' className='link'>
                        <Search></Search>
                        <br/>
                        탐색
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link to='mypage' className='link'>
                        <Person></Person>
                        <br/>
                        마이
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
