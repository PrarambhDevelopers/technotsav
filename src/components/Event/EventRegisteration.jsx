import React, { forwardRef } from 'react'

import { FaUser,FaUsers } from "react-icons/fa";
const EventRegisteration = ({
    singleEntryFee,
    groupEntryFee,
    registration,
    ref
    
}) => {
    return (
        <section className="max-w-3xl mx-auto px-4 py-10" ref={ref} id="registration">
            <h2  className="text-xl md:text-3xl font-bold text-center text-gray-800 fustat-heading">Event</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-center fustat-heading gradient h-20 md:h-24">Registration</h1>
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-6 bg-[linear-gradient(10deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)]">
                <div className="text-center">
                    <p className="text-sm text-white manrope-paragraph">
                        Register Between:{" "}<br/>
                        <span className="font-semibold  text-white">{registration.startDate}</span> to{" "}
                        <span className="font-semibold  text-white">{registration.endDate}</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-around gap-6">
                    <div className="flex flex-col justify-center gap-10 text-center ">
                        <div className="flex flex-col items-center">
                            <FaUser className='w-32 h-12 text-white text-center'/>
                            <p className="text-lg font-medium  mb-2 text-white fustat-heading">
                                Single Entry Fee
                            </p>
                            <p
                                
                                className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition-all fustat-heading text-md"
                            >
                                ₹{singleEntryFee}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                        <FaUsers className='w-32 h-14 text-white text-center'/>
                            <p className="text-lg font-medium mb-2 text-white fustat-heading">
                                Group Entry Fee
                            </p>
                            <p
                                
                                className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition-all fustat-heading text-md"
                            >
                                ₹{groupEntryFee}
                            </p>
                        </div>
                    </div>




                    <div className='flex flex-col justify-center'>
                    <div className="flex justify-center">
                        <div className="p-4 border rounded-xl bg-gray-50">
                            <img
                                src={registration.qrLink}
                                alt="Registration QR Code"
                                className="w-40 h-40 object-contain mx-auto"
                            />
                            <p className="text-xs text-center text-gray-500 mt-2 manrope-paragraph">
                                Scan to register
                            </p>
                        </div>
                    </div>
                    <div class="inline-flex items-center justify-center w-full my-4">
                        <hr class="absolute w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
                        <span class=" px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-[#161616] z-[1000] rounded-xl text-center">or</span>
                    </div>
                    <div className="flex justify-center mb-10">
                        <button
                            onClick={() => window.open(registration.registrationFormLink, "_blank")}
                            className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition-all fustat-heading text-md"
                        >
                            Register Here
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventRegisteration