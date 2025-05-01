import './ModalEditCard.css';
import { Trash2 } from 'react-feather';
import { useCon } from '../context/ContextCom';
import { useState } from 'react';
import ModalDeleteOnCard from './ModalDeleteOnCard';
export default function MoadalEditCard({moadaleditcard,setMoadalEditCard}){
    let { card , editItems} = useCon();
    let[numItem,setnumItem]=useState(card);
    let[modalDelete,setmodalDelete] = useState({hiOrSh:'none',id:""});
    function handleQuantityChange (id, type){
            const updatedCard = numItem.map((item) => {
                if (item.id === id) {
                    let newCount = type === 'inc' ? item.card + 1 : item.card - 1;
                    return {
                        ...item,
                        card: newCount < 0 ? 0 : newCount
                    };
                }
                return item;
            });
            setnumItem(updatedCard);
    };
    function handleDeleteItem(id) {
        const updatedCard = card.filter(item => item.id !== id);
        setnumItem(updatedCard);
    }
    let item = numItem.map((i) => (
        <tr>
            <td>
                <img
                className="d-block"
                src={i.img1||null}
                alt="First slide"
                />
                {i.name}
            </td>
            <td>$   {i.price.toFixed(2)}</td>
            <td>
            <div>
                <button
                    onClick={() => handleQuantityChange(i.id, 'inc')}
                >+</button>
                <input
                    type='number'
                    className='no-arrow'
                    min={0}
                    value={i.card}
                    readOnly
                />
                <button
                    disabled={i.card === 0}
                    style={{
                        cursor: i.card === 0 ? "not-allowed" : "pointer",
                    }}
                    onClick={() => {
                        if (i.card > 0) {
                            handleQuantityChange(i.id, 'dec')
                        }
                    }}
                >-</button>
            </div>
            </td>
            <td>${(i.card*i.price).toFixed(2)}</td>
            <td onClick={()=>{setmodalDelete({hiOrSh:'',id:i.id});}}><Trash2/></td>
        </tr>
    ));
    return(
        <>
            <div className='moadaleditcard' style={{
                display:moadaleditcard,
            }}>
                <div className="table ">
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5} >
                                    <button onClick={()=>{setMoadalEditCard("none")}}>cancel</button>
                                    <button  onClick={()=>{setMoadalEditCard("none");editItems(numItem)}}>Update cart</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <ModalDeleteOnCard modalDelete={modalDelete} setmodalDelete={setmodalDelete} handleDeleteItem={handleDeleteItem}/>
        </>
    )
}