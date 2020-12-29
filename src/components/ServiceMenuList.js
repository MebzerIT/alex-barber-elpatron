
import React from 'react';
import  { Link,Route,useRouteMatch } from  "react-router-dom";
import ServiceMenu from "./ServiceMenu";

const ServiceMenuList = ({match}) => {
  const serviceData = [
    { 
      id: 1,
      name: 'Fremhevet',
      CutType: [
        { name: 'Skin fade (style and color outlines)', duration: '45 min', price: 'kr 350' },
        { name: 'Haircut', duration:'30min', price: 'kr 300'},
        { name: 'Skin fade + beard', duration:'60 min', price: 'kr 500'},
        { name: 'Beard Trimmer and shave', duration:'14 min', price: 'kr 200'}
      ]
    },
    { 
      id: 2,
      name: 'Hair',
      CutType: [
        { name: 'House call "EL PATRON" ', duration: '60 min', price: 'kr 1000' },
        { name: 'Deluxe "EL patron" (deluxe shave and skin fade or regular haircut)', duration:'1hr 10 min', price: 'kr 600'},
        { name: 'Haircut', duration:'30 min', price: 'kr 300'},
        { name: 'Skin fade (style and color outlines)', duration:'45 min', price: 'kr 350'},
        { name: 'Haircut + beard (out razor just trimmed)', duration:'45 min', price: 'kr 450'},
        { name: 'Skin fade + beard', duration:'60 min', price: 'kr 500'},
        { name: 'Kids cut under 10 years old', duration:'45 min', price: 'kr 250'}
      ]
    },
    {   
        id: 3,
        name: 'Beard',
        CutType: [
        { name: 'Deluxe shave (Hot towel, trimmer, shave, color', duration: '25 min', price: 'kr 250' },
        { name: 'Beard Trimmer and shave', duration:'15 min', price: 'kr 200'},
        { name: 'Beard Trimmer', duration:'10 min', price: 'kr 150'}
        ]
    },
    {   
        id: 4,
        name: 'Extras',
        CutType: [
        { name: 'wash and style (only wash 50 nok)', duration: '5 min', price: 'kr 100' },
        { name: 'color (head and beard)', duration:'25 min', price: 'kr 300'},
        { name: 'Outlines', duration:'10 min', price: 'kr 150'}
        ]
    }
  ];
  const {url} = useRouteMatch ();
   

  /* Create an array of `<li>` items for each product */
  const linkList = serviceData.map((ServiceMenu) => {
    return (
      <li key={ServiceMenu.id}>
        <Link to={`${url}/${ServiceMenu.id}`}>{ServiceMenu.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3>Services</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:ServiceMenu.id`}>
        <ServiceMenu data={serviceData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a service..</p>
      </Route>
    </div>
  );
};

export default ServiceMenuList;


