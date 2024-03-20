// src/pages/Dashboard.jsx
import React from 'react';
import TradingViewWidget from '../components/TradingViewWidget';
import HeatMap from '../components/HeatMap';


function Dashboard() {
    return (
        <div>
            <main>
                <TradingViewWidget />
                <HeatMap />
            </main>
        </div>
    );
}

export default Dashboard;
