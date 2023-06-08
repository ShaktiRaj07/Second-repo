import * as React from "react";
import "./footer.css";

type data = {
  _site: any;
};

const Footer = (props: data) => {
  const { _site } = props;
  // console.log("footer", _site);

  return (
    <>
      <footer className="site-footer inline-block w-full">
        <div className="container">
          <div className="row" style={{ display: "contents" }}>
            <div className="col-sm-12 col-md-6" style={{ width: "52%" }}>
              <h6>{_site.c_footerheading}</h6>
              <p className="text-justify">{_site.c_desc}</p>
            </div>

            <div className="col-xs-6 col-md-3" style={{ float: "right" }}>
              <h6>{_site.c_secondheading}</h6>
              <ul className="footer-links">
                {_site.c_links?.map((data: any) => {
                  return (
                    <>
                      <li>
                        <a href="">{data.label}</a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            <div
              className="col-xs-6 col-md-3"
              style={{ float: "right", width: "13%", marginBottom:"1rem" }}
            >
              <h6>{_site.c_thirdHeading}</h6>
              <ul className="footer-links">
                {_site.c_linksecond?.map((data: any) => {
                  return (
                    <>
                      <li>
                        <a href="">{data.label}</a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ width: "91%", marginLeft: "3.6rem" }} />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">{_site.c_footerinner}</p>
            </div>

            <div
              className="col-md-4 col-sm-6 col-xs-12"
              style={{ marginLeft: "77rem", marginTop: "-2.4rem" }}
            >
              <ul className="social-icons">
                <li>
                 
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
