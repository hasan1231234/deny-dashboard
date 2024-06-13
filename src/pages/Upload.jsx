import React from 'react'
import Dashboard from '../components/dashboard';
import butn from '../images/Frame 1171277081.png'
import upload1 from '../images/Frame 1171276891.png'
import uoload2 from '../images/up.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
export default function Upload() {


  return (
    <div className='upload'>
        <div className="nav w-100 px-3 bg-white d-flex align-items-center justify-content-between">
            <h3 className='m'>المزارات</h3>
        </div>
        <div className="d-flex gap-3">
          <Dashboard/>
         <div className="rigth-section mr-16 my-5 w-100 px-5">
             <img src={butn} alt="" className='float-l curser'/>


              <div className="d-flex gap-3 my-5">
                 <div className='curser'>
                    <p>فيديو القرأن الكريم</p>
                    <Link to='/upload1'><img src={upload1} alt="" /></Link>  
                 </div>
                 <div className='curser'>
                    <p>صورة الاذكار</p>
                    <Link to='/upload2'><img src={uoload2} alt="" /></Link>
                 </div>
              </div>
          </div>

        </div>

    </div>
  )
}
