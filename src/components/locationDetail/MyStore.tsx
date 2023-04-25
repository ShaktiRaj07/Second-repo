import * as React from "react";

const Mystore = (props: any) => {

    return (
        <>
            <div>
                <p>
                    {props.props.heading}
                </p>
                <p>{props.props.description}</p>
                <img src={props.props.image.url} alt="acd" />
                <button>{props.props.cTA.label}</button>
            </div>


        </>
    )
}

export default Mystore;