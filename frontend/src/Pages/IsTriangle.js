import React from 'react'

function IsTriangle() {
    return (
        <div>
            <h3>Home</h3>
            <div>
                Check if the shape is a valid triangle: 
            </div>
            <div className="angles-input">
                <label htmlFor="angle-a">Angle A</label>
                <input id="angle-a" type="number" />
                <label htmlFor="angle-b">Angle B</label>
                <input id="angle-b" type="number" />
                <label htmlFor="angle-c">Angle C</label>
                <input id="angle-c" type="number" />
            </div>
        </div>
    )
}

export default IsTriangle
