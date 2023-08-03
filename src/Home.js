import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img

            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/REV/PC_Hero_3000x1200_2X_REV._CB599283686_.jpg " alt="amazon banner" />


            <div className="home_row">
                
                <Product 
                id="1"
                title="The lean startup"
                price={566}
                image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                rating={3}
                
                />
                <Product
                    id="2"
                    title="Rich Dad Poor Dad"
                    price={350}
                    image="https://m.media-amazon.com/images/I/51Hfv2MfNGL._SX331_BO1,204,203,200_.jpg"
                    rating={4}
                />

            </div>
            <div className="home_row">
                <Product
                id="3"
                title="Apple iPhone 14 Pro (128 GB) - Silver"
                price={120999}
                image="https://m.media-amazon.com/images/I/61lKQWyMdDL._SX466_.jpg"
                rating={4}
                />
                <Product
                    id="4"
                    title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"
                    price={124999}
                    image="https://m.media-amazon.com/images/I/61VfL-aiToL._SX569_.jpg"
                    rating={5}
                />
                <Product
                    id="5"
                    title="Nothing Phone (2) 5G (Dark Grey, 12GB RAM, 256GB"
                    price={56999}
                    image="https://m.media-amazon.com/images/I/713rQyFyeXL._SX385_.jpg"
                    rating={4}
                />
            </div>
            <div className="home_row">
                    
            <Product
                    id="6"
                    title="Samsung 34-inch(86.8cm) 3440 x 1440 Pixels Odyssey OLED G8 Ultra WQHD, 175 Hz, 0.1ms, HAS, Curved Gaming Monitor, USB Type -C, Smart TV, Gaming Hub, AMD FreeSync (LS34BG850"
                    price={121799}
                    image="https://m.media-amazon.com/images/I/81eLDCu76cL._SX425_.jpg"
                    rating={5}
            />
            </div>
        </div>
    </div>
  )
}

export default Home