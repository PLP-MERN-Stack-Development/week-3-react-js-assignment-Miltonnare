import { Children } from "react";

function Card({title,children,className=""}){
    return(
        <div className="{bg-white shadow rounded p-4${className}}">
            {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
            {Children}
        </div>
    );
};

export default Card;