'use client'
import React, { useRef } from "react";
import AnimatedOnScroll from "../AnimatedScrollerOnWrapper";
import MainForm from "./MainForm";
import HoverLogoButton from "../MainButton";


const ButtonAForm = () => {
    const mainFormRef = useRef(null);
    return (
        <div ref={mainFormRef}>
            <AnimatedOnScroll>
                <MainForm />
            </AnimatedOnScroll>
            <HoverLogoButton scrollToRef={mainFormRef} />
        </div>
    );
};

export default ButtonAForm;
