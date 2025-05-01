import { XSquare } from "react-feather";
import { Link } from "react-router-dom";
import { useCon } from "./context/ContextCom";
import { useMemo } from "react";
import './CardList.css'
export default function CardList({cardNav,setCardNav}){
    let { card } = useCon();
    let item = card.map((i) => (
    <div
      className="items"
        key={i.id}
        >
        <img
        src={i.img1}
        alt=""
        />
        <div>
        <p>{i.name}</p>
        <p>
            {i.card} x ${i.price}
        </p>
        </div>
    </div>
    ));
    const total = useMemo(() => {
        return card.reduce((acc, item) => acc + (item.price * item.card), 0).toFixed(2);
    }, [card]);
    return(
      <div className="cardList" style={{
          width: cardNav==="show"?"300px":"0",
          }}>
          <div>
            <div>Your Cart</div>
            <div><XSquare className="xsquare" onClick={()=>{setCardNav("hide")}}/></div>
          </div>
          <div className='item'>
              {item}
          </div>
          <div id="total">Total: ${total}</div>
          <Link to={'/viewcard'}>
            <button>View card</button>
          </Link>
        </div>
    )
}