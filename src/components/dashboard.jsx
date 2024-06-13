import React from 'react'
import {Link} from 'react-router-dom'


export default function Dashboard() {
  return (
    <ul className="dash bg-white p-0">
    <Link to='/'><li className='curser icon'>  تسجيل الدخول</li></Link>
    <Link to='/athkaremorning'><li className='curser icon'>  اذكار الصباح</li></Link>
    <Link to='/athkarevening'><li className='curser icon'> اذكار المساء</li></Link>
    <Link to='/athkarsleeping'><li className='curser icon'>اذكار النوم</li></Link>
    <Link to='/awrad'><li className='curser icon'>الورد اليومي</li></Link>
 
 </ul>
  )
}
