
function Footer(){
    return(
        <footer className="bg-gray-100 text-center py-4 mt-8 text-sm text-gray-600">
        <div className="flex justify-center space-x-4 mb-2">
         <ul className="flex space-x-4 list-none">
           <li className="hover:underline cursor-pointer">HOME</li>
           <li className="hover:underline cursor-pointer">ABOUT</li>
           <li className="hover:underline cursor-pointer">Tujitume</li>
         </ul>
      </div>
             <p>&copy; {new Date().getFullYear()} TaskManager App. All rights reserved.</p>
  
        </footer>
    )
}

export default footer;