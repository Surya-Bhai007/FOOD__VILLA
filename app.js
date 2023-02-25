import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.js";


// Default import
import Header from "./components/Header";
/**here Header name can be changed ex.Newheader bcoz it is default
 * but "./components/Header" here can't
 * ex.  import NewHeader from "./components/Header";
 * 
 * import Header from "./components/Header.js"; this will also work.
 * 
 * if u want to name as .jsx file name 
 * ex. import Header from "./components/Header.jsx";
 * here Header.jsx  is folder name it should match with that folder
 * but some of the external libraries track the file using extension in that it may cause some problem but it happens rarely
 * 
 * 
 -----------------------------------------------------------------*/

// Named import

//-->import { Title } from "./components/Header";
/**
 *import Header ,{ Title } from "./components/Header";
  here Title    exported by name and Header by default.
 *  import { Title ,Header } from "./components/Header";  
    when both are exported by name
 -----------------------------------------------------------------*/

// Imports all components from  "./components/Header".
//used as <Obj.Header/> it will also work but export should done by name
//---->import * as Obj from "./components/Header";
//-----------------------------------------------------------


//----------CONFIG DRIVEN UI--------------


/*
----------CONFIG DRIVEN UI--------------
RestrauntCard was here

Header was here 

Body was here

footer was here
*/
//--------------------------------------------------------

const App_layout = () => (
  <>
    {/* <Obj.Header  /> */}
    <Header key={"head"} />
    <Body key={"body"} />
    <Footer key={"footer"}/>
  </>
);

//--------------Initializing Root and render-------------
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App_layout key={"app_layout"} />);



 