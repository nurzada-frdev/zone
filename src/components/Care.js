import React from 'react';
import man2 from "../img/man2.png"
import man3 from "../img/man3.png"

const Care = () => {
    return (
        <div className="container">
            <div className="care">
                <div className="care-big flex  flex items-center  justify-around">
                    <div className="care-1">
                        <img src={man2} alt=""/>
                    </div>
                    <div className="care-1 text-white">
                        <h1 className="text-4xl mb-7">We complete every projects <br/>
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>
                            eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                    </div>
                </div>
                <div className="care-big flex  flex items-center  justify-around">
                    <div className="care-1 text-white">
                        <h1 className="text-4xl mb-7">We complete every projects <br/>
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>
                            eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/>
                            error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                    </div>
                    <div className="care-1">
                        <img src={man3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;