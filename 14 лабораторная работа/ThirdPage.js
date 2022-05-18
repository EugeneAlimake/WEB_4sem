import React from 'react'
import {Search} from './Search.jsx'




function ThirdPage() {

    return (
        <>
<h1>Третья страничка</h1>
<h2>Сенченя Владислав Игоревич</h2>
<h2>{`${new Date().getDate()+1}.${new Date().getMonth()+2}.${new Date().getFullYear()+1}`}</h2>
<Search />
</>
    );
  }
  
  export default ThirdPage;