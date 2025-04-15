import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import Hero from "../components/Shared/Hero";
import ProductList from "../components/Shared/ProductList";

export default function Home (){
    return (
        <>
            <Header/>
            <Hero/>
            <ProductList/>
            <Footer/>
        </>
    )
}