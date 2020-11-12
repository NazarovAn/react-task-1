import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className='main__container'>
            <h1 className='main__heading'>Hello</h1>
            <Link to='/slider' className='main__button'>Слайдер</Link>
        </div>
    )
}