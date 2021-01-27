import React from 'react';
import {useState, useEffect} from 'react';

function ImageSlider() {

    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=IGQVJXQjBmWXprMmhIOU9vWU1VTTJiMmpSeC1CTFh6M2d0MDRpOTYtQi1pT2JKMC1BWjNrd0VYU1EyUXhjM1NWTHpJeENDT05HT2tkMTgyNWpfYmpXWndGa1FuMzZA0OUhBTW5peUw0NVBzLXZAFcjVHNAZDZD';
        fetch(url).then(resp=>resp.json())
        .then(resp=>console.log(resp))
    },[]); 
    return (
        <div>
            {
               /* photo.map((photos, key) => {
                return (
                  <div key={photos.id}>
                    <img src={photos.images.standard_resolution.url} alt={photos.caption}/>
                  </div>
                )
              }) */
            }          
        </div>
    );

}

export default ImageSlider;
