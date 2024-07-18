import React from 'react';

const Nodata: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <p className="text-lg mb-4">Please search a city to view weather data.</p>
            </div>
        </div>
    );
};

export default Nodata;

