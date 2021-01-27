
import React from 'react';
import  { Link,Route,useRouteMatch,Switch} from  "react-router-dom";
import ServiceMenu from "./ServiceMenu";
import './ServiceMenuList.css';

const ServiceMenuList = () => {
  const serviceData = [
    { 
      id: 1,
      name: 'Fremhevet',
      CutType: [
        { id: 1, name: 'Skin fade (style and color outlines)', duration: '45 min', price: 'kr 350' },
        { id: 2, name: 'Haircut', duration:'30min', price: 'kr 300'},
        { id: 3, name: 'Skin fade + beard', duration:'60 min', price: 'kr 500'},
        { id: 4, name: 'Beard Trimmer and shave', duration:'14 min', price: 'kr 200'}
      ]
    },
    { 
      id: 2,
      name: 'Hair',
      CutType: [
        { id:1, name: 'House call "EL PATRON" ', duration: '60 min', price: 'kr 1000' },
        { id:2, name: 'Deluxe "EL patron" (deluxe shave and skin fade or regular haircut)', duration:'1hr 10 min', price: 'kr 600'},
        { id:3, name: 'Haircut', duration:'30 min', price: 'kr 300'},
        { id:4, name: 'Skin fade (style and color outlines)', duration:'45 min', price: 'kr 350'},
        { id:5, name: 'Haircut + beard (out razor just trimmed)', duration:'45 min', price: 'kr 450'},
        { id:6, name: 'Skin fade + beard', duration:'60 min', price: 'kr 500'},
        { id:7, name: 'Kids cut under 10 years old', duration:'45 min', price: 'kr 250'}
      ]
    },
    {   
        id: 3,
        name: 'Beard',
        CutType: [
        { id:1, name: 'Deluxe shave (Hot towel, trimmer, shave, color', duration: '25 min', price: 'kr 250' },
        { id:2, name: 'Beard Trimmer and shave', duration:'15 min', price: 'kr 200'},
        { id:3, name: 'Beard Trimmer', duration:'10 min', price: 'kr 150'}
        ]
    },
    {   
        id: 4,
        name: 'Extras',
        CutType: [
        { id: 1, name: 'wash and style (only wash 50 nok)', duration: '5 min', price: 'kr 100' },
        { id:2, name: 'color (head and beard)', duration:'25 min', price: 'kr 300'},
        { id:3, name: 'Outlines', duration:'10 min', price: 'kr 150'}
        ]
    }
  ];
  const {path,url} = useRouteMatch();
  
  
  /* Create an array of `<li>` items for each product */
  const linkList = serviceData.map(({ name, id }) => {
    return (
              <li key={id}>
                <Link to={`${url}/${id}`} className='links'>{name}</Link>
              </li>
            );
          });
    return (
      <div>
        <div>
          <div className="MenuList">
            <h3>MENU OF SERVICES</h3>
            <ul>{linkList}</ul>
          </div>
        </div>
        <Switch>
            <Route path={`${path}/:ServiceMenuId`}><ServiceMenu data={serviceData}/></Route> 
           
            <Route exact path={url}>
              <p>Please select a service..</p>
            </Route>
        </Switch>
           
      </div>
    );
  };

export default ServiceMenuList;


