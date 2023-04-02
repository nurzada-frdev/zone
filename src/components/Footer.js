import React from 'react';
import zone from "../img/zon.svg"
import {FiMapPin} from 'react-icons/fi';
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {CiFacebook} from 'react-icons/ci';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {GrInstagram} from 'react-icons/gr';
import {BsPinterest} from 'react-icons/bs';
import {AiFillSkype} from 'react-icons/ai';

const Footer = () => {
    return (

        <footer>
            <div className="container">
                <div className="text-white flex justify-between mb-5">
                    <div>
                        <div>
                            <div className="flex items-center text-white">
                                <img src={zone} alt=""/>
                                <a className="ml-3 text-2xl"  href="">Zone.</a>
                            </div>
                        </div>
                        <div className="flex items-center text-white">
                            <h1><FiMapPin/></h1>
                            <a className="ml-1" href="">Dhaka, Bangladesh</a>
                        </div>
                        <div className="flex items-center text-white">
                            <h1 className="text-2xl flex items-center"><BiPhoneCall/></h1>
                            <a className="ml-1" href="">0943833399</a>
                        </div>
                        <div className="flex items-center text-white">
                            <h1><HiOutlineMail/></h1>
                            <a className="ml-1" href="">support@zone.com</a>
                        </div>
                        <div className="flex items-center text-white text-2xl justify-between">
                            <h1><CiFacebook/></h1>
                            <h1><AiFillTwitterCircle/></h1>
                            <h1><GrInstagram/></h1>
                            <h1><CiFacebook/></h1>
                            <h1><BsPinterest/></h1>
                        </div>
                    </div>
                        <div className="flex flex-col">
                            <a href="">Service </a>
                            <a href="">Order Management </a>
                            <a href="">Social Assistant </a>
                            <a href="">Crypto Platform</a>
                            <a href="">Analyzer of the News</a>
                        </div>

                        <div className="flex flex-col">
                            <a href="">Company </a>
                            <a href="">About Us </a>
                            <a href="">News </a>
                            <a href="">Our trusted partner </a>
                            <a href="">New users FAQ</a>
                        </div>
                    <div className="flex flex-col">
                        <a href="">Supports </a>
                        <a href="">Help center </a>
                        <a href="">Feedbcak</a>
                        <a href="">Contact us</a>
                        <a href="">Terms conditins</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="">Resources </a>
                        <a href=""> Download app</a>
                        <a href=""> Blog </a>
                        <a href="">What’s new</a>
                        <a href="">new Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;