import React, { useEffect } from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged  (auth, (user) => {
      if (user) {
        
        const {uid , email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
       
      } else {
        dispatch(removeUser());
        navigate("/");

      }
      return ()=> unsubscribe;
    });
    

  },[])

const handleSignOut =()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
     <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
   {user && <div className='flex'>
      <img   className ="px-2 h-12 w-14" src={user?.photoURL}/>
      <button className=' my-auto font-bold text-white rounded-md w-24' onClick={handleSignOut} >Sign Out</button>
    </div>}
   </div>
  )
}

export default Header