import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import React from "react";
export default function Dashboard(){
    const navigate  = useNavigate();
    const scrollToNextSection = () => {
        const contentSection = document.getElementById("content");
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <>
            <Header/>
            <Hero onclick={()=>{navigate("/predict")}}/>
        </>
    )
}