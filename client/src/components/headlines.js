import React from 'react';
import lizards from '../imgs/liz.jpg';
import rocks from '../imgs/rocks.jpg';
import mtns from '../imgs/mountain.jpg';

class Headlines extends React.Component {

    render() {
        return (

            <div className="uk-position-relative uk-visible-toggle uk-light headlines" uk-slideshow="ratio: 7:3; animation: push">

                <ul className="uk-slideshow-items">
                    <li>
                        <img src={lizards} alt="" uk-cover></img>
                    </li>
                    <li>
                        <img src={rocks} alt="" uk-cover></img>
                    </li>
                    <li>
                        <img src={mtns} alt="" uk-cover></img>
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            </div>

        );
    }
}
                
export default Headlines;