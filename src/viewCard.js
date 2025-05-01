import './ViewCard.css';
import { useState , useEffect} from 'react';
import MoadalEditCard from './modals/MoadalEditCard';
import { Form} from "react-bootstrap";
import { useCon } from "./context/ContextCom";
import { useMemo } from "react";
export default function ViewCard(){
    let { card } = useCon();
    let[moadaleditcard,setMoadalEditCard]=useState("none");
    const total = useMemo(() => {
        return card.reduce((acc, item) => acc + (item.price * item.card), 0).toFixed(2);
    }, [card]);
    let[totalPrice,setTotalPrice]=useState({price:total,coupon:""});
    function checkCoupon(){
        if(totalPrice.coupon==="das ist super"){
            setTotalPrice({...totalPrice,price:((total-total*0.2).toFixed(2))});
        }
    }
    useEffect(() => {
        if (totalPrice.coupon === "das ist super") {
            setTotalPrice(prev => ({
                ...prev,
                price: (total - total * 0.2).toFixed(2)
            }));
        } else {
            setTotalPrice(prev => ({
                ...prev,
                price: total
            }));
        }
    }, [total]);
    let item = card.map((i) => (
        <tr>
            <td  style={{
                display: "flex",
                alignItems: "center",
            }}>
                <img
                style={{
                    margin:"20px 45px 20px 10px",
                    width:"70px"
                }}
                className="d-block"
                src={i.img1}
                alt="First slide"
                />
                {i.name}
            </td>
            <td>$   {i.price.toFixed(2)}</td>
            <td>
            <div style={{
                display:"flex",
                width: "fit-content",
                margin: "10px auto"
            }}>
                {i.card}
            </div>
            </td>
            <td>${(i.card*i.price).toFixed(2)}</td>
        </tr>
    ));
    return(
        <>
            <div className='viewcard'>
                <div className="table">
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>number</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4}>
                                    <input type="text"placeholder="Coupon code"
                                        onChange={(e)=>{setTotalPrice({...totalPrice,coupon:e.target.value})}}
                                    />
                                    <button 
                                        onClick={()=>{checkCoupon()}}
                                        >Apply coupon</button>
                                    <button
                                        onClick={()=>{setMoadalEditCard("")}}
                                        style={{
                                            padding:"10px 30px"
                                        }}>Update cart</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='carttotals'>
                    <div className='total'>
                        <h2>Cart Totals</h2>
                        <p>Subtotal:    ${total}</p>
                    </div>
                    <div className='proceedOrder'>
                        <div>
                            <h5 style={{marginRight:"15px"}}>Shipping:</h5>
                            <div style={{width:"50%"}}>
                                <p style={{
                                    color: "gray",
                                    fontSize: "14px"
                                }}>There are no shipping methods available. Please double check your address, or contact us if you need any help.<br/><br/><span style={{color:"black"}}>Calculate Shipping</span></p>
                                <Form.Select  style={{
                                    padding:"10px",
                                    width:"133%",
                                    display:"inline-block",
                                    margin:"0 0 10px"
                                }}> 
                                    <option>Select a country</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </Form.Select>
                                <input type="text" placeholder="State/ country"/>
                                <input type="text" placeholder="postCode/ ZIP"/>
                            </div>
                        </div>
                        <div>
                            <p>Total:   ${totalPrice.price}</p>
                            <button 
                            >proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <MoadalEditCard setMoadalEditCard={setMoadalEditCard} moadaleditcard={moadaleditcard}/>
        </>
    );
}