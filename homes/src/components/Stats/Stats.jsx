import React from "react";

const Stats = () => {
    return (
        <div className="stats">
            <div className="section-title mt-12">
                <div className="line"></div>
            </div>
            <div className="backgroundStats flex justify-center items-center mt-12">
                <div className="max-w-5xl mx-auto p-4 m-6 rounded-lg shadow-md"> {/* shadow-md */}
                    <div className="md:flex md:justify-between">
                        <div className="mb-8 md:w-2/5">
                            <h2 className="text-4xl font-semibold text-blue-700 mb-2">Fast Facts</h2>
                            <p className="text-gray-600 mt-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6 md:w-2/3">
                            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-blue-500 rounded-full p-4 text-white inline-block">
                                    <span className="text-3xl">$160B +</span>
                                </div>
                                <p className="text-md text-gray-600 mt-4 font-semibold">Earnings by Agents</p>
                            </div>

                            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                                <div className="bg-green-500 rounded-full p-4 text-white inline-block">
                                    <span className="text-3xl">100 +</span>
                                </div>
                                <p className="text-md text-gray-600 mt-4 font-semibold">Countries with Homeo</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="bg-purple-500 rounded-full p-4 text-white inline-block">
                                <span className="text-3xl">3M +</span>
                            </div>
                            <p className="text-md text-gray-600 mt-4 font-semibold">Customers Worldwide</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="bg-orange-500 rounded-full p-4 text-white inline-block">
                                <span className="text-3xl">1M +</span>
                            </div>
                            <p className="text-md text-gray-600 mt-4 font-semibold">Agents Worldwide</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="bg-yellow-500 rounded-full p-4 text-white inline-block">
                                <span className="text-3xl">450M +</span>
                            </div>
                            <p className="text-md text-gray-600 mt-4 font-semibold">Happy People</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
