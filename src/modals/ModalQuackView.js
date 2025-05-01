import './ModalQuackView.css';
import ModalViewItem from './ModalViewItem';
import ModalOperationSuccess from './ModalOperationSuccess';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { XSquare , Maximize2 , Facebook , Twitter , Instagram} from "react-feather";
import { useCon } from '../context/ContextCom';
export default function ModalQuackView({setmodalquackview,modalquackview,itemdetails,setitemdetails}){
    let{addcard}=useCon();
    let[modalviewitem,setmodalviewitem]=useState("none");
    let[modalpperationsuccess,setModalOperationSuccess]=useState("none");
    function showMoOpSu(){
        if(itemdetails.card>0&&itemdetails.size!==""&&itemdetails.cardColor!==""){
            setModalOperationSuccess("");
            setmodalquackview("none");
        }else{
            setModalOperationSuccess("");
            setmodalquackview("");
        }
    }
    return(
        <>
            <div 
            className='modalQuackView'
            style={{
                display:modalquackview,
            }}>
                <button className='xsquare'>
                    <XSquare onClick={()=>{setmodalquackview("none")}}/>
                </button>
                <div
                className='modalQuackViewContent' 
                >
                    <div className='viewItem'>
                        <div className='pictures'>
                        <img
                            className="d-block"
                            src={itemdetails.img01||null}
                            alt="First slide"
                        />
                        <img
                            className="d-block"
                            src={itemdetails.img02||null}
                            alt="First slide"
                        />
                        <img
                            className="d-block"
                            src={itemdetails.img03||null}
                            alt="First slide"
                        />
                        </div>
                        <div className='cursol'>
                            <Carousel data-bs-theme="dark">
                                <Carousel.Item>
                                    <button  style={{
                                        position:"absolute",
                                        top:"15px",
                                        right:"15px",
                                        border:"0",
                                        borderRadius:"50%",
                                        background:"white",
                                        color:"black",
                                        width:"auto",
                                        padding:"10px"
                                    }}onClick={()=>setmodalviewitem("")}>
                                        <Maximize2 className='maximize2'/>
                                    </button>
                                    <img
                                    className="d-block w-100"
                                    src={itemdetails.img01||null}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item style={{position:"relative"}}>
                                <button onClick={()=>setmodalviewitem("")}>
                                    <Maximize2 className='maximize2'/>
                                    </button>
                                    <img
                                    className="d-block w-100"
                                    src={itemdetails.img02||null}
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item style={{position:"relative"}}>
                                <button  style={{
                                        zIndex:"3"
                                    }}onClick={()=>setmodalviewitem("")}>
                                        <Maximize2 className='maximize2' />
                                    </button>
                                <img
                                    className="d-block w-100"
                                    src={itemdetails.img03||null}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className='addCard'>
                        <p style={{
                            fontSize: "larger",
                            fontWeight: "bold"
                        }}>{itemdetails.name}<br/>${itemdetails.price}</p>
                        <p style={{
                            color:"gray"
                        }}>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
                        <div className='form' style={{
                            textAlign:"center"
                        }}>
                            <label>Size</label>
                            <Form.Select value={itemdetails.size} onChange={(e)=>{setitemdetails({...itemdetails,size:e.target.value})}}>
                                <option>Choose</option>
                                <option>M</option>
                                <option>XL</option>
                                <option>2XL</option>
                                <option>3XL</option>
                            </Form.Select>
                            <br/>
                            <label>Color</label>
                            <Form.Select  style={{
                            }} value={itemdetails.cardColor} onChange={(e)=>{setitemdetails({...itemdetails,cardColor:e.target.value})}}>
                                <option>Choose</option>
                                <option>Blue</option>
                                <option>White</option>
                                <option>gray</option>
                            </Form.Select>
                            <div className='addAndMinusItemCArd'>
                                <button
                                    onClick={() => {
                                        setitemdetails({ ...itemdetails, card: itemdetails.card + 1 });
                                    }}
                                >+</button>
                                <input
                                    type='number'
                                    className='no-arrow'
                                    min={0}
                                    value={itemdetails.card}
                                    readOnly
                                />
                                <button
                                    disabled={itemdetails.card === 0}
                                    style={{
                                        cursor: itemdetails.card === 0 ? "not-allowed" : "pointer",
                                        borderLeft:"0",
                                        borderRight:"01px solid gray",
                                    }}
                                    onClick={() => {
                                        if (itemdetails.card > 0) {
                                            setitemdetails({ ...itemdetails, card: itemdetails.card - 1 });
                                        }
                                    }}
                                >-</button>
                            </div>
                            <button className='addcardbutton'onClick={()=>{
                                addcard(itemdetails.id,itemdetails.card,itemdetails.size,itemdetails.cardColor);
                                showMoOpSu();
                                }}>Add To Card</button>
                            <div className='icon'>
                                <Facebook/><Instagram/><Twitter/></div>
                            </div>
                    </div>
                </div>
            </div>
            <ModalViewItem modalviewitem={modalviewitem} setmodalviewitem={setmodalviewitem} itemdetails={itemdetails}/>
            <ModalOperationSuccess modalpperationsuccess={modalpperationsuccess} setModalOperationSuccess={setModalOperationSuccess} setmodalquackview={setmodalquackview} itemdetails={itemdetails} />
        </>
    );
}