import { useState } from "react";

 function Input({setCountry}) {
   const [text, setText] = useState('India');
   
   return (
     <>
     <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
     <button onClick={()=>setCountry(text)}>btn</button>
     </>
   );
 }

export default Input
