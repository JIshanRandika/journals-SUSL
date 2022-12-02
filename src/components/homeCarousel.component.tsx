import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


export default class HomeCarouselComponent extends Component {
    render() {

        return (
            <div style={{position: 'relative'}}>
                <Carousel>
                    <div>
                        <img src="assets/img/header1.jpg"/>
                        {/*<p className="legend">Legend 1</p>*/}
                    </div>
                    <div>
                        <img src="assets/img/header1.jpg"/>
                        {/*<p className="legend">Legend 2</p>*/}
                    </div>
                    <div>
                        <img src="assets/img/header1.jpg"/>
                        {/*<p className="legend">Legend 3</p>*/}
                    </div>

                </Carousel>
            </div>


        );
    }
}
