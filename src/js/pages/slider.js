import React from 'react';
import redux from '../redux/index';
import { connect } from 'react-redux';

export default class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.getImages('https://imagesapi.osora.ru/');
    }

    async getImages(url) {
        const resp = await fetch(url);
        const json = await resp.json();
        const imagesUrl = [];
        json.forEach((string) => {
            imagesUrl.push(string);
        })

        redux.setImages(imagesUrl)
    }

    render() {
        return <div></div>
    }
}