import React from 'react';
import '../App.css';
import { Button } from './Button';
import './WlcomeSection.css';

function WlcomeSection() {
    return (

        <div className='wrapper'>
            <div className='flex-container'>
                <div className='flex-child one'>
                    <span className="headerText"><h3>Alex Barber Alpetron</h3></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className='WlSec-btns'>
                            <Button className='btns' buttonStyle='btn--outline'
                            buttonSize='btn--large'>Book Now</Button>
                        </div>
                </div>
                <div className='flex-child two'>
                    <img src={process.env.PUBLIC_URL + "./images/alpetron.jpg"}
                            width="562px" height="820px"   className="align-center" alt="alex-barber" />
                </div>

            </div>
        </div>
    )
}

export default WlcomeSection
