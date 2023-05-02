import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


export default class HomeCarouselComponent extends Component {
    render() {

        return (
            <div style={{position: 'relative',alignContent:"center",alignItems:"center",alignSelf:"center",justifyContent:'center'}}>
            {/*    <Carousel*/}

            {/*        width='200px'*/}
            {/*        showThumbs={false}*/}
            {/*    centerMode={true}*/}
            {/*        centerSlidePercentage={100}*/}
            {/*>*/}
                    <div>
                        <img src="assets/img/cover.png" width='250px' style={{boxShadow: '1px 2px 50px 20px white'}}/>
                        {/*<p className="legend">Legend 1</p>*/}
                    </div>
                {/*    <div>*/}
                {/*        <img src="assets/img/img1.png"/>*/}
                {/*        /!*<p className="legend">Legend 2</p>*!/*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <img src="assets/img/img1.png"/>*/}
                {/*        /!*<p className="legend">Legend 3</p>*!/*/}
                {/*    </div>*/}

                {/*</Carousel>*/}
            </div>


        );
    }
}
