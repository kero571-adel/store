import { useCon } from "./context/ContextCom";
import { Trash2 } from "react-feather";
import { useState } from "react";
import ModalDeleteonHeart from "./modals/modaldeleteonHeart";
import './Heart.css';
export default function HeartList(){
    let{heart,Deletefav}=useCon();
    let[numItem,setnumItem]=useState(heart);
    let[modalDelete,setmodalDelete] = useState({hiOrSh:'none',id:""});
    function handleDeleteItem(id) {
        const updatedCard = heart.filter(item => item.id !== id);
        setnumItem(updatedCard);
    }
    let item = numItem.map((i)=>{
        return(
            <tr>
                <td><img src={i.img1} style={{width:"80px",margin:'30px 30px 30px 10px'}} alt=""/></td>
                <td>{i.name}</td>
                <td>${i.price}</td>
                <td><Trash2 style={{color:"red",cursor:'pointer'}}onClick={()=>{setmodalDelete({hiOrSh:"",id:i.id})}}/></td>
            </tr>
        )
    });

    return(
        <> 
            <div className='heart'>
                <div className="table">
                    <table border={2} style={{
                        textAlign:"center",
                        width:"100%"
                    }}>
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item}
                        </tbody>
                    </table>
                </div>
            </div>
           <ModalDeleteonHeart modalDelete={modalDelete} setmodalDelete={setmodalDelete} handleDeleteItem={handleDeleteItem} Deletefav={Deletefav}/>
        </>
    )
}