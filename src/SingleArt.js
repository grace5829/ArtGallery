import { Card, CardMedia, Container, Grid } from '@mui/material';
import React from 'react'
import './popup.css';

const SingleArt = (props) => {
    const {info,imageLink}= props
    console.log(info)

    return (props.trigger )? (
        <div className="popup">
        <div className="popup-inner">
        <img src={imageLink} className={"popupImage"} />
        <div className='popupInfo'>

        <div>{info.artist_title}</div>
                    <div>{info.date_end }</div>
                    <div>{info.artwork_type_title}</div>
                    <div>Department:{info.department_title}</div>
        </div>
          {props.children}
        </div>
      </div>
      ) : (
        ""
      );
}

export default SingleArt