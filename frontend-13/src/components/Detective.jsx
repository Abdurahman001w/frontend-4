import { useState } from "react";
const Detective = ()=>{
  const [sherlock,setSherlock]=useState('психопат')
  return(
    <div>
      шерлок - {sherlock}
    </div>
  )
}
export default Detective