import React from 'react';
import { AiOutlinePlayCircle} from 'react-icons/ai';
import bg from "../img/man.png"
const Virtual = () => {
    return (
        <section id="virtual">
            <div className="container ">
                <div className="flex items-center justify-between">
                    <div className="v-1 text-white">
                        <h1 className="text-blue-600 text-6xl mb-8"> Virtual Reality <br/>
                            Business Solutions</h1>
                        <p className="mb-8">We have over 15 year exprience in business consultting arena. We have over <br/>
                            15 year exprience in business consultting arena and artficial intelligence.

                        </p>
                        <div className="flex items-center">
                            <button type="button"
                                    className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-7 py-3.5 text-center ">Join Us</button>
                            <h1 className="text-2xl ml-20"><AiOutlinePlayCircle/></h1><h1 className="text-2xl">Watch video</h1>
                        </div>
                    </div>
                    <div className="v-2">
                        <img src={bg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Virtual;