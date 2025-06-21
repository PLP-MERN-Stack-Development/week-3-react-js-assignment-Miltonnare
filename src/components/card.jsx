import { Children } from "react";

function Card({title,children,className=""}){
    return(
        <div className={`bg-white dark:bg-gray-800 shadow rounded p-4 ${className}`}>
            {title && <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>}
            {children}
        </div>
    );
};

export default Card;