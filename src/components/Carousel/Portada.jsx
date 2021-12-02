import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Portada = ()=>{

    return(
        
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://i.pinimg.com/originals/b7/60/65/b76065c978317292b1ecde58fc2b6939.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://i.pinimg.com/originals/7e/38/ab/7e38ab1359f8f16fcf30fe8054f63670.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://i.pinimg.com/originals/d3/9c/d6/d39cd6ed7f4c27737736d47f4a35404f.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )

}
export default Portada