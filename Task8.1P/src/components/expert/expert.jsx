import React, { Component } from 'react';
import head from '../../assets/head.jpg'
import './expert.css'

const arr = [
    {
        id:1,
        name: 'Mr lee',
        age: 30,
        gender: 'male'
    },
    {
        id:2,
        name: 'Miss Wang',
        age: 26,
        gender: 'female'
    },
    {
        id:3,
        name: 'Mr Zhang',
        age: 32,
        gender: 'male'
    },
    {
        id:4,
        name: 'Mr Ma',
        age: 19,
        gender: 'male'
    },
    {
        id:5,
        name: 'Miss Luo',
        age: 30,
        gender: 'female'
    },
    {
        id:6,
        name: 'Miss Xiong',
        age: 36,
        gender: 'female'
    }
]
const arrItem = arr.map(item => {
    return <div key={item.id}>
        <div className="box">
            <img className="headimg" src={head} alt="" />
            <div>name:{item.name}</div>
            <div>age:{item.age}</div>
            <div>gender:{item.gender}</div>
        </div>
    </div>
})

class Expert extends Component {
    render() {
        return (
            <div className="bigbox">
                {arrItem}
            </div>
        )
    }
}

export default Expert;