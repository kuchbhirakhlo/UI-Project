'use client'
import { useState } from "react";
import RestaurantLogin from "../../components/Restaurant/RestaurantLogin";
import RestaurantSignUp from "../../components/Restaurant/RestaurantSignUp";
import Header from "../../components/Header";
// import Footer from "../_components/Footer";

const Restaurant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
        <div className="container">
            <Header />
            <div className="text-center text-lg text-[#008080] ">
            <button className=" button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have account? SignUp" : "Already have Account? Login"}
                </button>
                </div>
            {
                login ? <RestaurantLogin /> : <RestaurantSignUp />
            }

               
            </div>
        </>
    )
}

export default Restaurant;