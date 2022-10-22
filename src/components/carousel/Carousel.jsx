import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                    <img src="../images/carousel/banner_gigabyte5.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src="../images/carousel/banner_gigabyte3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src="../images/carousel/banner_gigabyte4.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src="../images/carousel/banner_gigabyte2.png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
