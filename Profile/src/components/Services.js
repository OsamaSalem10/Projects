import React from 'react';

export const Services = () => {
    return (
        <section className="section__container service__container" id="Service">
            <p className="section__subheader">Our Services</p>
            <h2 className="section__header">What We Do?</h2>
            <p className="section__description">
                I specialize in a wide range of web development services designed to
                transform your vision into reality.
            </p>
            <div className="service__grid">
                <div className="service__card">
                    <span><i className="ri-window-fill"></i></span>
                    <h4>Website Design</h4>
                    <p style={{ paddingBottom: "10px" }}>
                        I craft user-friendly interfaces that engage visitors and help you
                        achieve your online goals .
                    </p>
                    <p style={{ color: "orange" }}>Using : Css And Bootstrap And Material UI </p>
                </div>
                <div className="service__card">
                    <span><img src='https://cdn-icons-png.flaticon.com/512/4261/4261939.png' className='' alt='' width={50} height={50}/></span>
                    <h4>Front-end Development</h4>
                    <p style={{ paddingBottom: "10px" }}>
                        I creating and designing the user interface (UI) and user experience (UX) of websites
                    </p>

                    <p style={{ color: "orange" }}>Using : React (Redux / TypeScript / Css / Bootstrap / axios )</p>
                </div>
                <div className="service__card">
                    <span><img src='https://cdn-icons-png.flaticon.com/512/5432/5432506.png' className='' alt='' width={50} height={50}/></span>
                    <h4 >Back-end Development</h4>
                    <p style={{ paddingBottom: "10px" }}>
                        Working on server-side software, which focuses on everything you can't see on a website.
                    </p>
                    <p style={{ color: "orange" }}>Using : Node JS And PHP And Laravel And MongoDB And MySQL</p>
                </div>
              
            </div>
        </section>
    );
}

