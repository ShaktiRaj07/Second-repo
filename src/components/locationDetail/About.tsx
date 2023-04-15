import { Link } from "@yext/pages/components";
import * as React from "react";
import abbanner from "../../images/ab-banner.jpg"
import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"
import RtfConverter from "@yext/rtf-converter";

export default function About(props: any) {
  function convertToRtf(rtf: any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    rtf = rtf.replace('/', '');
    rtf = rtf.replace(';', '');
    rtf = rtf.replace('-', '');
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }
  return (
    <>
      <div className="about-sec ">
        <div className="container-custom">
          <div className="about-inner-sec">
            

            <div className="w-full lg:w-2/5 xl:w-[47%] relative  left-0">
              <div className="lg:h-full">


            {props.props.image.url && <img src={props.props.image.url} height={300} width={558} alt="photo" />}    

              </div>
            </div>
            <div className="about-content">
              <div className="mb-4">
              <span style={{ fontSize: '25px', fontWeight: '600' }}>{props.props.heading}</span>
                <h2>{props.name}</h2>
                <div className="">
                  <div className="about-content-inner" dangerouslySetInnerHTML={{ __html: convertToRtf(props.props.description) }} style={{ wordSpacing: '4px'}}/>
                </div>

                <div className="content-center w-full">
                  <Link href="" className="button-red"
                    data-ya-track={`about-button`}
                    eventName={`about-button`}
                    rel="noopener noreferrer"
                  >{props.props.cTA.label}</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )


}