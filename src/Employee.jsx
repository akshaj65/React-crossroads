import React from 'react'

function Employee(props) {
    return (
        <div>
            <h1>Name: {props.name} , Km: {props.km} </h1>
        </div>
    )
}

export default Employee
