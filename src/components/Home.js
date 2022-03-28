import React from 'react'
import img1 from "./images/img1.png"

function Home(props) {
    console.log("props",props)
    return (
        <div>
           
            <h1>MEDICINE STORE</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={img1}/>
                </div>
                <div className="text-wrapper item">
                    <div>
                        PERACETAMOL
                    </div>
                    <span>
                        Price: 500.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({price:500,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
            {/* <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <div>
                        Samsung
                    </div>
                    <span>
                        Price: 10000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({price:10000,name:'Samsung'})}
                        }>
                        Add To Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div> */}
        </div>
    )
}
export default Home