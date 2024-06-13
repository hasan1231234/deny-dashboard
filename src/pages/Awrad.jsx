import React, { useState } from 'react'
import Dashboard from '../components/dashboard';
import edit from '../images/flowbite_edit-solid.png'
import delet from '../images/mingcute_delete-2-fill.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Awrad() {


    const [data , setData] = useState([])


    const apiClient = axios.create({
        baseURL: 'https://deen.somee.com', // Replace with your API's base URL
        timeout: 1000,
        headers: { 'Content-Type': 'application/json' },
      });
    
      const getUsers = async () => {
        try {
          const response = await apiClient.get('https://deen.somee.com/api/Dashboard/GetAllQuran'); // Replace with your endpoint
          console.log(response.data);
        setData(response.data)
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
      getUsers();
      const deleteItemById = async (id) => {

      //  const thkarId = 'AthkarId'
        try {
            const response = await axios.delete('https://deen.somee.com/api/Dashboard/DeleteQuran' , {
              params: { QuranId : id }
            });
            console.log('Item deleted successfully:', response.data);
            alert('Item deleted successfully');
        } catch (error) {
            console.error(id, error);
            alert('Error deleting item');
        }
    };
  return (
    <div className='home'>
        <div className="nav w-100 px-3 bg-white d-flex align-items-center justify-content-between">

        </div>
        <div className="d-flex position-relative  gap-3">
          <Dashboard/>
         <div className="rigth-section my-5 w-100 mr-16 px-5">
              <div className="d-flex align-items-center justify-content-between">
                <h3>الورد اليومي</h3>
                 <Link to='/upload1'><button className='btn-add'>اضافة ورج</button></Link>
              </div>
              <table className='bg-white container table my-5 rounded w-100'>
                 <tr>
                    <th>ID</th>
                    <th>الفديو</th>
                    <th>الاسم</th>
                    <th>تاريخ الرفع</th>
                 </tr>

                  {data.map((e) => {
                    return(
                        <tr>
                    <td>{e.id}</td>
                    <td>

                      <video controls autoPlay width='90' height='90' >
                        <source src={`https://deen.somee.com/files/${e.file}`} />
                      </video>
                    </td>
                    <td>{e.name}</td>
                    <td>{e.date}</td>
                    <td className='d-flex gap-1'><img src={edit} alt="" /><img src={delet} alt="" onClick={() => deleteItemById (e.id)}/></td>
                 </tr>
                    )
                  })}
              </table>
          </div>

        </div> 

    </div>
  )
}
