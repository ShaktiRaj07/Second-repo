import * as React from "react";
import "./header.css";

type Link = {
  label: string;
  url: string;
};


const Header = (props: any) => {
  const linkDoms = props._site.c_menufield?.map((link: any) => (
    <div key={link.label}>
      <a href="#">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <header>
        <div className="overlay">
        <img
            src="https://a.mktgcdn.com/p-sandbox/NbRSu6nMaZjEnZx6GoJoXlrardl1cAAFMCjiKtfS52g/1844x1642.png"  className="imglogo"/>
          <nav className="nav-2">
            <span className="navmanage">{linkDoms}</span>
          </nav>
          <h1 className="headingmain">Simply The Best</h1>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
    </>
  );
};

export default Header;
