import React from 'react'
import './ComponentCSS/FoodCircle.css';
const FoodCircle = () => {
    return (
        <div id="show_circle_food">
            <h2 className="show_food_heading">Eat! What makes you Happy 😊</h2>
            {/* <!-- here we show much food s images and names --> */}
            <div id="all_food_circle">
                {/* <!-- food - 1 --> */}
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/dosa_logo.jpg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor=""> Dosa </label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/burger_logo.webp" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Burger</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/Pizza_logo.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Pizza</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/tea_logo.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Tea</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/samosa_logo.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Samosa</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/noodles_logo.webp" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Noodles</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/juice_logo.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Juice</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/pasta_logo.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Pasta</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/Biryani_logo.webp" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Biryani</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/Sandwich.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Sandwich</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/burger_logo.webp" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Burger</label>
                    </div>
                </div>
                <div className="circle_food">
                    <img className='circle_food_box' src="./Images/logos/Pizza_logo.jpeg" alt="food" srcSet="" />
                    <div className="label">
                        <label htmlFor="">Pizza</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCircle
