import Header from "@/app/components/Header"; 

export default function MyApp( { Component, pageProps }) {

    return (
        <>
            <Header />
            <Component 
            {...pageProps}
    
        />
        </>
    ); 
}