import React from 'react';
import { useParams } from "react-router-dom";

const ServiceMenu = ({data}) => {

    const {ServiceMenuId} = useParams();
    const service = data.find(s => s.id  === Number(ServiceMenuId));
    let serviceData;

    if (service) {
        serviceData = (
        <div>
            <h3> {service.CutType.name} </h3>
            <p>{service.CutType.duration}</p>
            <hr />
            <h4>{service.CutType.price}</h4>
        </div>

        );
    }
    else {
        serviceData = <h2> Sorry. Service doesn't exist </h2>;
      }

      return (
        <div>
          <div>{serviceData}</div>
        </div>
      );
};
export default ServiceMenu;
