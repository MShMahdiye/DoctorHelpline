import React from "react";


const Scroll = (props) => {return(
    <div className="flex flex-wrap text-center items-center justify-center w-150 ml-20" style={{overflowY: 'scroll' ,  height: '500px'}}>
        {props.children}
    </div>
);}

export default Scroll;