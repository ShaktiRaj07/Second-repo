import * as React from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../../types/search/locations";
import GetDirection from "../commons/GetDirection";
import redmapimage from "../../images/red-map.svg";
import timesvg from "../../images/watch-icn.svg";
import Address from "../commons/Address";
import OpenClose from "../commons/openClose";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
import { PhoneCallEvent } from "@yext/analytics";
import { Addresssvg } from "../../../sites-global/global";
import country from "../../Backup/country";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
};
let array = [];

const LocationCard: CardComponent<Location> = ({ result }) => {
  let url = "";
  const [hoursopen, setHoursopen] = React.useState(false);

  function opentime(e: any) {
    //console.log(e.target);
    var closethis = e.target.closest(".lp-param-results");
    if (
      closethis
        .querySelector(".storelocation-openCloseTime")
        .classList.contains("hidden")
    ) {
      closethis
        .querySelector(".storelocation-openCloseTime")
        .classList.remove("hidden");
      setHoursopen(true);
    } else {
      closethis
        .querySelector(".storelocation-openCloseTime")
        .classList.add("hidden");
      setHoursopen(false);
    }
  }

  const { address } = result.rawData;
  // console.log('result.rawData', result.rawData)

  
  var name: any = result.rawData.id?.toLowerCase();
  var country: any = result.rawData.address.countryCode?.toLowerCase();
  var initialcountry: any = country.toString();
  var finalcountry: any = initialcountry.replaceAll(" ", "-");
  var region: any = result.rawData.address.region?.toLowerCase();
  var initialregion: any = region.toString();
  var finalregion: any = initialregion.replaceAll(" ", "-");
  var city: any = result.rawData.address.city?.toLowerCase();
  var initialrcity: any = city.toString();
  var finalcity: any = initialrcity.replaceAll(" ", "-");
  var string: any = name.toString();
  let result1: any = string.replaceAll(" ", "-");

  let newURl = finalcountry + "/" + finalregion + "/" + finalcity + "/" + result1 + ".html";
  if (!result.rawData.slug) {
    //  url= `/${result.rawData.id}-${result1}.html`;
    url = newURl;
  } else {
    //  url= `/${result.rawData.slug.toString()}.html`;
    url = newURl;
  }

  return (
    <div
      className={`location result-list-inner-${result.id} result`}
      id={`result-${result.id}`}
      key={`result-${result.rawData.id}`}
    >
      <div className="result-inner ">
        <div className="center-column">
          <div className="lp-param-results lp-subparam-hours">
            <div className="location-name-miles icon-row">
              <div className="icon text-black relative">
                {" "}
                <img
                  className=" "
                  src={redmapimage}
                  width="20"
                  height="20"
                  alt={""}
                />
                <span className="map-count">D</span>
              </div>
              <h2>
                <Link
                  className="inline-block notHighlight"
                  data-ya-track={`viewDetail -${result.rawData.name}`}
                  eventName={`viewDetail -${result.rawData.name}`}
                  rel="noopener noreferrer"
                  href={`/${url}`}
                >
                  {result.rawData.name}
                </Link>
              </h2>
              {/* meters to miles code here ---- */}

              {typeof result.distance != "undefined" ? (
                <div className="distance">
                  {metersToMiles(result.distance)}{" "}
                  <span>{StaticData.miles}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="icon-row content-col address-with-availablity notHighlight">

              <Address address={address} />
              <div className="icon-row">
                <div className="icon ml-[-24px]">
                  <img className=" " src="/src/images/phone.svg" width="22" height="22" alt="phonesvg" />
                </div>
                <div className="content-col ml-[-24px]" >
                  <a id="address" className=" location-phn" href="tel:+919764315487">+919764315487</a>
                </div>
              </div>
              {result.rawData.hours ? (
                <>
                  <div className="mt-2">
                    {/* <h6>Opening Hours</h6> */}
                    {result.rawData.hours?.reopenDate ? (
                      <>
                        <div className="icon">
                          {" "}
                          <img
                            className=" "
                            src={'timesvg'}
                            width="20"
                            height="20"
                            alt=""
                          />{" "}
                        </div>
                        <div
                          className=" flex open-now-string items-center "
                          data-id={`main-shop-${result.rawData.id}`}
                          onClick={opentime}
                        >
                          {StaticData.tempClosed}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className=" flex open-now-string items-center"
                          data-id={`main-shop-${result.rawData.id}`}
                        >
                          <OpenClose
                            timezone={result.rawData.timezone}
                            hours={result.rawData.hours}
                            deliveryHours={result.rawData.hours}
                          ></OpenClose>
                        </div>
                      </>
                    )}

                    {/* <div className={`storelocation-openCloseTime  capitalize hidden`}>
                      {hoursopen ?
                        typeof result.rawData.hours === "undefined" ? ("") :
                          <Hours key={result.rawData.name} additionalHoursText={result.rawData.additionalHoursText} hours={result.rawData.hours} c_specific_day={result.rawData.c_specific_day} />
                        : ''}
                    </div> */}
                  </div>
                </>
              ) : (
                <div className="closeddot notHighlight red-dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                  >
                    <circle
                      id="Ellipse_5"
                      data-name="Ellipse 5"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#ad1e1f"
                    />
                  </svg>
                  <div className="hours-info text-lg font-second-main-font closeddot">
                    Closed
                  </div>
                </div>
              )}
            </div>
            <div className="button-bx">
              <Link
                type="button"
                href={`/${url}`}
                className="btn notHighlightt"
                data-ya-track={`viewStore -${result.rawData.name}`}
                eventName={`viewStore -${result.rawData.name}`}
                rel="noopener noreferrer"
              >
                {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                {StaticData.StoreDetailbtn}
              </Link>
              {result.rawData.displayCoordinate ? (
                <GetDirection
                  buttonText={StaticData.getDirection}
                  address={address}
                  latitude={result.rawData.displayCoordinate?.latitude}
                  longitude={result.rawData.displayCoordinate?.longitude}
                />
              ) : (
                <GetDirection
                  buttonText={StaticData.getDirection}
                  address={address}
                  latitude={result.rawData.yextDisplayCoordinate?.latitude}
                  longitude={result.rawData.yextDisplayCoordinate?.longitude}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
