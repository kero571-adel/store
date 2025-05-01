import './ModalViewItem.css';
import { XSquare } from "react-feather";
import { Carousel } from "react-bootstrap";
export default function ModalViewItem({setmodalviewitem,modalviewitem,itemdetails}){
    return(
        <div className='modalViewItem' style={{
            display:modalviewitem,
        }}>
            <button className='xsquare'onClick={()=>{setmodalviewitem("none")}}>
                <XSquare/>
            </button>
            <Carousel data-bs-theme="dark"className="ModalQuackViewCarousel">
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={itemdetails.img01||null}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={itemdetails.img02||null}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={itemdetails.img03||null}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}