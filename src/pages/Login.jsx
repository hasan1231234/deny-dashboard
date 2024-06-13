import React from 'react'
import logo from '../images/icon_username.png'
import logo2 from '../images/icon_password.png'
export default function Login() {
    return (
        <div className="login">
            <div className="login-right  w-50">
                <div className='d-flex flex-column w-50 gap-3'>
                     <h3 className='text-center'>مرحبا بك</h3>
                     <p className='text-secondary text-center'>الورد اليومي لحفظ القرأن</p>
                     <div className='text-right'>
                     <label className='text-success'>اسم المستخدم</label>
                     <div><input type="text" /> <img src={logo} alt="" /></div>
                     <label className='text-success'>كلمة المرور</label>
                     <div><input type="password" /> <img src={logo2} alt="" /></div>
                     </div>
                </div>
            </div>
            <div className="login-left w-50">
               
            </div>


        </div>
    )
}
