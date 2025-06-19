import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({children}){
    return(
        <>
        <Navbar></Navbar>
        <main className="max-w-3xl mx-auto p-4">
            {children}
        </main>
        <Footer></Footer>
        </>
    )

}

export default Layout;