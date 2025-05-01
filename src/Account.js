import './Account.css';
import { User} from "react-feather";
import EditProfile from "./modals/EditProfile";
import { useState } from "react";
import { useCon } from "./context/ContextCom";
export default function Account(){
    let{profile}=useCon();
    let[edit,setEdit]=useState("none");
    function hiddenEditAndShow(){
        if(edit==="none")
            setEdit("");
        else
            setEdit("none");
    }
    return(
        <>
            <div className="account">
                <div className="profilepicture">
                    <div>
                        {profile.image?<img src={profile.image}alt="" style={{width:"100%",height:"100%",margin:"auto auto", borderRadius:"50%"}}/>:<User style={{width:"80px",height:"80px",margin:"auto"}}/>}
                    </div>
                </div>
                <p>{profile.name?profile.name:".............."}</p>
                <div>
                    <p>email:   {profile.email?profile.email:".............."}</p>
                    <p>Phone:   {profile.phone?profile.phone:"............"}</p>
                </div>
                <button
                    onClick={()=>{hiddenEditAndShow()}}
                >Edit your profile</button>
            </div>
            <EditProfile style={edit} changeEditStyle={setEdit}/>
        </>
    );
}