import React from 'react';
import icon from "../img/Icon.svg"
const Our = () => {
    return (
        <div className="container">
            <div>
                <div className="our-1 text-white flex items-center text-center flex-col mb-9">
                    <h1 className="mb-6 text-2xl">Our Service </h1>
                    <p>We turn information into actionable insights We work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>
                </div>
                <div className="flex items-center justify-around our-1 text-white flex items-center text-center mb-10">
                    <div className="flex flex-col items-center text-white text-center border-2 rounded-2xl p-10">
                        <img src={icon} alt="" className="mb-3"/>
                        <h2>Order Management</h2>
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</p>
                            <button>Learn more</button>
                    </div>
                    <div className="flex flex-col items-center text-white text-center border-2 rounded-2xl p-10">
                        <img className="mb-3" src={icon} alt=""/>
                        <h2>Order Management</h2>
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</p>
                        <button>Learn more</button>
                    </div>
                    <div className="flex flex-col items-center text-white text-center border-2 rounded-2xl p-10">
                        <img className="mb-3" src={icon} alt=""/>
                        <h2>Order Management</h2>
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="flex items-center justify-around our-1 text-white flex items-center text-center">
                    <div className="flex flex-col items-center text-white text-center border-2 rounded-2xl p-10">
                        <img className="mb-3" src={icon} alt=""/>
                        <h2>Order Management</h2>
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</p>
                        <button>Learn more</button>
                    </div>

                    <div className="flex flex-col items-center text-white text-center border-2 rounded-2xl p-10">
                        <img className="mb-3" src={icon} alt=""/>
                        <h2>Order Management</h2>
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</p>
                        <button>Learn more</button>
                    </div>
                    <div className="flex flex-col items-center text-white text-center border-2 rounded-2xl p-10">
                        <img className="mb-3" src={icon} alt=""/>
                        <h2>Order Management</h2>
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;