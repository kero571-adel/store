import './ModalOperationSuccess.css';
import { X } from 'react-feather';
export default function ModalOperationSuccess({setModalOperationSuccess,modalpperationsuccess,itemdetails,setmodalquackview}){
    return(
        <div className='modalDeleteOnCard' style={{
            display:modalpperationsuccess,
        }}>
            <div className="card"> 
                <div className="header"> 
                    <div className="image" style={{background:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"#e2feee":"#ff000054"}}>
                        <svg style={{display:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"":"none"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <X style={{color:"white",display:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"none":""}}/>
                    </div> 
                    <div className="content">
                        <span className="title"style={{display:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"":"none"}}>succfulley</span> 
                        <p className="message"style={{display:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"none":""}}>You seem to have not completed the order data, if you want to exit, press "OK" or press "CONTINUE!</p> 
                    </div> 
                    <div className="actions">
                        <button className="history" onClick={()=>{setModalOperationSuccess("none");setmodalquackview("none")}}style={{background:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"rgb(55 208 120)":"rgb(248 77 77)",width:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"100%":"45%"}}>OK</button> 
                        <button className="history" onClick={()=>{setModalOperationSuccess("none")}}style={{display:itemdetails.card>0&&itemdetails.size!==""&&itemdetails.size!=="Choose"&&itemdetails.cardColor!==""&&itemdetails.cardColor!=="Choose"?"none":"",background:"rgb(55 208 120)"}}>CONTINUE</button> 
                    </div> 
                </div> 
            </div>
        </div>
    );
}