import React from "react";
import './extendedInfo.scss';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

function ExtendedInfo({extendedDescription, open, setOpen}){
    return(
        <div className="extended-info">
            <p>{extendedDescription}</p>
            
            <p onClick={()=> setOpen(!open)} className='showInfo'>Mostrar menos</p>
        </div>
    )
}
export default ExtendedInfo;