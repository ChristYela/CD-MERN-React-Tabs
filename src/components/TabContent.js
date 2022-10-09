import React, { useState } from 'react';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const TabContent = () => {
    const [tab, setTab] = useState({
        content: ["Hi Y'all! I'm tab 1.", "Hola!, Soy la pestaña 2.", "Gosto de te ver aqui!, Eu sou a pestanha 3."],
        selectedTab: "",
    })

    const onClickHandler = (index) => {
        setTab({
        ...tab,
        selectedTab: index,
        })
    } 

    return (
        <div className='container p-3'>
            <nav className= "nav nav-pills nav-justified justify-content-center">
            {tab.content.map((tab, index)=>(
                    <div className= { "nav-item nav-link active nav-link rounded-pill border border-light bg-info"} onClick={() => onClickHandler(index)}> 
                    Tab {index + 1}
                    </div>         
                ))}
            </nav>

            <div className="border rounded-pill border-dark mt-5 bg-success p-2 text-light">
            <p>{tab.content[tab.selectedTab]}</p>
            </div>
        </div>
    )
}

export default TabContent;