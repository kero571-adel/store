import './EditProfile.css';
import { useRef, useState, useEffect } from 'react';
import { User, Edit2 } from "react-feather";
import { useCon } from '../context/ContextCom';

export default function EditProfile({ style, changeEditStyle }) {
    const { profile, setProfile } = useCon();
    const [editedProfile, setEditedProfile] = useState(profile);

    const fileInputRef = useRef(null);

    useEffect(() => {
        setEditedProfile(profile);
    }, [profile]);

    const handleSaveProfile = (e) => {
        e.preventDefault(); // مهم عشان نمنع الـ form من إنه يعمل reload
        setProfile(editedProfile);
        localStorage.setItem('userProfile', JSON.stringify(editedProfile));
        changeEditStyle("none");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedProfile(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='editprofile' style={{ display: style }}>
            <form className="editprofileContent" onSubmit={handleSaveProfile}>
                <div className="profilepicture">
                    {editedProfile.image ? (
                        <img src={editedProfile.image||null} alt="Profile"/>
                    ) : (
                        <User className='user'/>
                    )}
                    <Edit2 
                        className='edit2'
                        onClick={() => fileInputRef.current.click()}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </div>
                <input
                    className='editName'
                    type="text"
                    placeholder="Edit Name"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleInputChange}
                    required
                />
                <div className='editEmailAndPhone'>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={editedProfile.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            type="number"
                            name="phone"
                            min={0}
                            value={editedProfile.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button type="submit">
                    Edit your profile
                </button>
            </form>
        </div>
    );
}
