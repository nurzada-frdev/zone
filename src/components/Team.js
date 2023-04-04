import React from 'react';
import ux1 from "../img/ux1.svg"
import ux2 from "../img/ux2.svg"
import ux3 from "../img/ux3.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ux4 from "../img/ux4.svg"
import {CiFacebook} from 'react-icons/ci';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {GrInstagram} from 'react-icons/gr';
import {BsPinterest} from 'react-icons/bs';
import {AiFillSkype} from 'react-icons/ai';
const Team = () => {
    return (
        <div  className="container">
            <div className="team mb-10">
                <div className="our-1 text-white flex items-center text-center flex-col mb-10">
                    <h1 className="mb-4 text-2xl">Met Our Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                    </p>
                </div>
                <div className="flex justify-around text-center text-white ">
                        <div className="box p-10 rounded-2xl border-2 ">
                            <img src={ux1} alt=""/>
                            <h2>Sunny Khan</h2>
                            <h3 className="mb-2">Executive officer</h3>
                            <div className="flex items-center text-white text-2xl justify-between ">
                                <h2 className="text-blue-600"><CiFacebook/></h2>
                                <h2 className="text-blue-600"><AiFillTwitterCircle/></h2>
                                <h2 className="text-red-600"><BsPinterest/></h2>
                                <h2 className="text-blue-600"><AiFillSkype/></h2>
                            </div>
                        </div>
                        <div className="box  border-2 p-10 rounded-2xl">
                            <img src={ux2} alt=""/>
                            <h2>Alina Jesia</h2>
                            <h3 className="mb-2">UX/UI DESIGNER</h3>
                            <div className="flex items-center text-white text-2xl justify-between ">
                                <h2 className="text-blue-600"><CiFacebook/></h2>
                                <h2 className="text-blue-600"><AiFillTwitterCircle/></h2>
                                <h2 className="text-red-600"><BsPinterest/></h2>
                                <h2 className="text-blue-600"><AiFillSkype/></h2>
                            </div>
                        </div>
                        <div className="box  border-2 p-10 rounded-2xl" >
                            <img src={ux4} alt=""/>
                            <h2>Alex Sohag</h2>
                            {/*<h3>BUSINESS DEVELOPMENT</h3>*/}
                            <h3 className="mb-2">Executive officer </h3>
                            <div className="flex items-center text-white text-2xl justify-between ">
                                <h2 className="text-blue-600"><CiFacebook/></h2>
                                <h2 className="text-blue-600"><AiFillTwitterCircle/></h2>
                                <h2 className="text-red-600"><BsPinterest/></h2>
                                <h2 className="text-blue-600"><AiFillSkype/></h2>
                            </div>
                        </div>
                        <div className="box  border-2 p-10 rounded-2xl">
                            <img src={ux3} alt=""/>
                            <h2>Afroza Mou</h2>
                            <h3 className="mb-2">Head of marketing</h3>

                            <div className="flex items-center text-white text-2xl justify-between ">
                                <h2 className="text-blue-600"><CiFacebook/></h2>
                                <h2 className="text-blue-600"><AiFillTwitterCircle/></h2>
                                <h2 className="text-red-600"><BsPinterest/></h2>
                                <h2 className="text-blue-600"><AiFillSkype/></h2>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Team;