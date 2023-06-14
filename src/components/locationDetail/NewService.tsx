import * as React from "react";
import "../../index.css";

const NewService = (props: any) => {

    return (
        <>
            <div className="services-sec">
                <div className="container">
                    <div className="sec-title">
                        <h2>Services</h2>
                    </div>
                    <div className="services-list">
                        <div className="service-box">
                            <div className="service-inner-box">
                                <div className="icon">
                                    <img src="https://a.mktgcdn.com/p/99EFeed-_qmftw7t4ZyHAZpWzO94ZzIL4a1LxuMQqRM/82x82.png" alt="Icon" width="35" loading="lazy" />
                                </div>
                                <a className="Link" href="#" rel="noopener noreferrer"  data-ya-track="serviceLink_1">Reservations</a>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-inner-box">
                                <div className="icon">
                                    <img src="https://a.mktgcdn.com/p/iNi2rQtjvtYHUGAHc4gj_2fSqfVTTChcn9Puq3AAlMk/100x142.png" alt="Icon" width="35" loading="lazy" />
                                </div>
                                <a className="Link" href="#" rel="noopener noreferrer"  data-ya-track="serviceLink_2">Online Ordering</a>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-inner-box">
                                <div className="icon">
                                    <img src="https://a.mktgcdn.com/p/jHp_VybGKRy88FFZIcluPjdMNj4tB108gikhdepQAdQ/110x110.png" alt="Icon" width="35" loading="lazy" />
                                </div>
                                <a className="Link" href="#" rel="noopener noreferrer"  data-ya-track="serviceLink_3">Curbside Pick-up</a>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-inner-box">
                                <div className="icon">
                                    <img src="https://a.mktgcdn.com/p/cpECzK9YzCQF-YuV1cV6-jbUSEErup95QX657dCXtTY/95x79.png" alt="Icon" width="35" loading="lazy" />
                                </div>
                                <a className="Link" href="#" rel="noopener noreferrer"  data-ya-track="serviceLink_4">Deliveries</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewService;