import React from "react";
import homes from "../../assets/images/homes.png";
import AboutUs from "../AboutUs/AboutUs";
import Stats from "../Stats/Stats";

const Home = () => {
    
    return(
            <div className="bg-gray-100 min-h-screen">        
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg flex">
                <div className="flex-shrink-0 mr-6 mt-24">
                <h2 className="num font-semibold text-5xl ml-8">Find your place 
                <br /> around the world</h2>
                <p className="text-gray-600 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className="flex-grow">
                <img src={homes} alt="Image" className="w-full h-auto rounded-lg" />
                </div>
            </div>
            <div className="inputssearch bg-white rounded-xl shadow-lg p-6 absolute bottom-24 left-1/2 transform -translate-x-1/2">
                <div className="flex">
                <select className="border border-gray-30 rounded-lg p-2 w-48 flex-grow mr-6 text-gray-500">
                            <option value="" hidden>Buy / Rent</option>
                            <option value="option1">For Sale</option>
                            <option value="option2">For Rent</option>
                            <option value="option3">All</option>
                        </select>
                        <select className="border border-gray-300 p-2 rounded-lg w-48 mr-6 text-gray-500">
                            <option value="" hidden>Region</option>
                            <option value="choice1">Caba</option>
                            <option value="choice2">Buenos Aires Provincia</option>
                            <option value="choice3">All</option>
                        </select>
                <button className="bg-blue-500 text-white font-nunito font-bold hover:bg-blue-300 px-6 py-2 rounded-lg focus:outline-none">Search</button>
                </div>
            </div>
            </div>
            <AboutUs />
            <Stats />

            <h4 className="mt-96">asdasdas</h4>
        </div>
      
    )
};


export default Home;