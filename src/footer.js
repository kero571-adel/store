import './footer.css';
import { Heart, Facebook, Instagram, Twitter} from 'react-feather';
import { Button } from 'react-bootstrap';
export default function Footer(){
    return(
        <footer>
            <div>
                <div className='categories'>
                    <div>Categories</div>
                    <button>Men</button>
                    <button>Women</button>
                    <button>Shoes</button>
                    <button>Watches</button>
                </div>
                <div className='help'>
                    <div>Help</div>
                    <button>Track Order</button>
                    <button>Return</button>
                    <button>Shipping</button>
                    <button>FAQs</button>
                </div>
                <div className='getInTouch'>
                    <div>Get In Touch</div>
                    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className='icon'>
                        <Facebook style={{marginRight:"20px"}}/>
                        <Instagram/>
                        <Twitter style={{marginLeft:"20px"}}/>
                    </div>
                </div>
                <div className='newsLetter'>
                    <div>news Letter</div>
                    <form>
                        <input type='email' placeholder='email@example.com'/>
                        <Button onClick={()=>{window.location.reload()}}>SUBSCRIBE</Button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/icon-pay-01.png`} alt='your browser do not support it'/>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/icon-pay-02.png`} alt='your browser do not support it'/>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/icon-pay-03.png`} alt='your browser do not support it'/>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/icon-pay-04.png`} alt='your browser do not support it'/>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/icon-pay-05.png`} alt='your browser do not support it'/>
                </div>
                <p>Copyright ©2025 All rights reserved | Made with<Heart style={{color:"white"}}/>by Colorlib & distributed by ThemeWagon</p>
            </div>
        </footer>
    )
}