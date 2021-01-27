import React from 'react';
import { useParams } from "react-router-dom";
import './ServiceMenu.css';

const ServiceMenu = ({data}) => {
    const {ServiceMenuId} = useParams();
    
    const service = data.find(data => data.id  === Number(ServiceMenuId));
    
    return (
      <div className="RespoTable">
          <table>
            <tbody>            
                 <tr>
                    <th colSpan="3">{service.name}</th>
                  </tr>  
                 {service.CutType.map((sub) => (                 
                  <tr key={sub.id}> 
                    <td>{sub.name}</td>
                    <td>{sub.duration}</td>
                    <td>{sub.price}</td>
                  </tr>           
                ))}
            </tbody>
          </table> 
        </div>
    );
}
export default ServiceMenu;