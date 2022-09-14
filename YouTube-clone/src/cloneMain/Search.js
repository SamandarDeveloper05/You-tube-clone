import React,{ useState } from 'react'
import logo from './images/logo1.png'
import functions from './images/functions.png'
import profileImg from './images/profileImg.jpg'
const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  
  }
        
  const keyPress = (event) => {
    if(event.key === "Enter") {
      onSubmit(searchTerm)
    }
  
  }
  return (
    <>
     <div className='header'>
      <a href="/" className='brand'>
        <img src={logo} alt="logo" className='logoBrand' />
      </a>
     <input 
     type="text" 
      fullWidth
      placeholder='Search...'
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={keyPress}
      className="input"
     />
     <div className='icons'>
      <div>
      <img src={functions} alt="functions" className='functions' />
    
      </div>
    
     </div>
     </div>
    </>
  )
}

export default Search