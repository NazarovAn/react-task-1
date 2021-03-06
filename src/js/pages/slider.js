import React from 'react';
// import redux from '../redux/index';
import { Link } from 'react-router-dom';
import dog1 from '../../img/0.jpg';
import dog2 from '../../img/1.jpg';
import dog3 from '../../img/2.jpg';
import { connect } from 'react-redux';
import reducers from '../redux/reducers';
import { setImages } from '../redux/actions';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        console.log('---------\nslider props');
        console.log(props);
        const images = setImages([dog1, dog2, dog3]);
        console.log('----------\nSlider constructor');
        console.log(images);
        reducers({}, images);
        // this.getImages('https://imagesapi.osora.ru/');
    }

    // async getImages(url) {
    //     const resp = await fetch(url);
    //     const json = await resp.json();
    //     const imagesUrl = [];
    //     json.forEach((string) => {
    //         imagesUrl.push(string);
    //     })

    //     reducers(redux.setImages(imagesUrl));
    // }

    showPrevImage() {
        console.log('prev');
    }

    showNextImage() {
        console.log('next');
    }

    switchSource() {
        console.log('switched');
    }

    render() {
        return (
            <div className='slider__container'>
                <div className='silder__image_container'>
                    <div className='slider__button' onClick={this.showPrevImage}>prev</div>
                    <img src={dog1} alt='test' className='slider__image'></img>
                    <div className='slider__button' onClick={this.showNextImage}>next</div>
                </div>
                <div className="slider__switch_button" onClick={this.switchSource}>switch to local</div>
                <Link to='/' className="slider__button">back to main</Link>
            </div>
        )
    }
}

export default connect()(Slider)