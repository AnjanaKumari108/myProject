
import { onAuthStateChanged, signOut } from 'firebase/auth';
import  { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser , removeUser} from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
    
  };
  useEffect(() =>{
     
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName, photoURL} = user;
          dispatch(
            addUser({
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL
            })
        );
          navigate("/browse")

        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")

        }
      });
      //unsubscribes when component unmounts
     return () => unsubscribe();
} , []);
  return (
    
   
  
    <div className='absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 flex justify-between'  >
        <img
        
           
            src={LOGO}
            alt='Logo'
            className='h-10 w-50 mx-auto md:mx-0'/>
    

    {user && (<div className="flex p-2">
      <img
      className="w-12 h-12"
      alt="usericon"
      src="https://i.pinimg.com/564x/cf/86/5e/cf865e4a4951eda36bc859779ae8b432.jpg"

      width="30"
      height="30"
      />
     <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
   
   </div>)}
   </div>
  );
  
};
export default Header;
