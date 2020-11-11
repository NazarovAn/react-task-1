import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className='slider_container'>
            <h1 className='slider_heading'>Hello</h1>
            <Link to='/slider' className='slider_button'>Слайдер</Link>
        </div>
    )
}