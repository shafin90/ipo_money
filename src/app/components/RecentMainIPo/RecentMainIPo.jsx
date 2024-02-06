'use client'
import React, { useEffect, useRef, useState } from 'react';
import RecentIPOCard from '../RecentIPOCard/RecentIPOCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './RecentMainIPo.css'

const RecentMainIPo = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    // Update screen width on window resize
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    //  Registering scrollTrigger==========
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: window.innerWidth <600?"-800vw": "-300vw",
                ease: "none",
                // duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 3,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);



    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', updateScreenWidth);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);


    return (
        <section className="scroll-section-outer">
            {/* <h1 className=' text-center font-semibold text-2xl'>Recent Main IPOs</h1> */}
            {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                    <div className="scroll-section">
                        <RecentIPOCard></RecentIPOCard>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default RecentMainIPo;
