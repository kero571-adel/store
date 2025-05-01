import './ModalOperationSuccess.css';
import { X } from 'react-feather';
import { useCon } from '../context/ContextCom';
export default function ModalDeleteOnCard({modalDelete,setmodalDelete,handleDeleteItem}){
    let { Delete } = useCon();
    return(
        <div className='modalDeleteOnCard' style={{
            display:modalDelete.hiOrSh,
           
        }}>
            <div class="card"> 
                <div class="header"> 
                    <div class="image" style={{background:"#ff000054"}}>
                        <X style={{color:"white"}}/>
                    </div> 
                    <div class="content">
                        <span class="title" style={{color:"red"}}>Are you sure</span> 
                    </div> 
                    <div class="actions">
                        <button class="history" style={{background:"red"}} onClick={()=>{Delete(modalDelete.id);setmodalDelete({id:"",hiOrSh:'none'});handleDeleteItem(modalDelete.id)}}>yes</button> 
                        <button class="history" onClick={()=>{setmodalDelete({...modalDelete,hiOrSh:'none'})}}>No</button> 
                    </div> 
                </div> 
            </div>
        </div>
    );
}