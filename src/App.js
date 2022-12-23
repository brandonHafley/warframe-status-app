import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [statusData, setStatusData] = useState([]);

    const getStatusData = fetch("https://api.warframestat.us/pc/fissures?language=en", {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

    const parseStatusData = async () => {
        setStatusData(await getStatusData);
    }

    useEffect(() => {
        parseStatusData();
    }, []);

    return (
        <div className="App">
            <header>
                <h1>Warframe Status App</h1>
                {statusData.map(el => (
                    <div key={el.id}>
                        {el.enemy}
                        {el.missionType}
                        {el.node}
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;