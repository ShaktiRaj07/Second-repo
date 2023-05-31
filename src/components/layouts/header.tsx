import * as React from "react";
import "./header.css";

type Link = {
  label: string;
  url: string;
};

const Header = (props: any) => {
  const linkDoms = props._site.c_menufield?.map((link: any) => (
    <div key={link.label}>
      <a href="#" className="beautify">{link.label}</a>
    </div>
  ));

  return (
    <>
      <header>
        <div className="overlay">
          <img src={props._site.c_headerLogo.url} className="imglogo" />
          <nav className="nav-2">
            <span className="navmanage">{linkDoms}</span>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
