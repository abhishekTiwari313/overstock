import { Button, Input, useToast } from '@chakra-ui/react';
import React,{useState} from 'react';
import axios from 'axios';
import "./AdminAdd.css";

const AdminAdd = () => {
const[Category,setCategory]=useState("")
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [image,setUrl]=useState("")


const toast=useToast()




    const handleSubmit = () =>{
      const payload={
         name:name,
         category:Category,
         image:image,
         price:price,
         count:2
      }
      axios.post(`https://stock-server.onrender.com/products`,payload)
      .then((r)=>{
        setCategory("");
        setPrice("");
        setName("");
        setUrl("");
        toast({
          title: 'Added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((e)=>{
        console.log(e)
      })
     
    }
  return (
    <div style={{ marginTop: "140px"}}>
      <h1 style={{fontWeight:"700",fontSize:"30px",fontFamily:"sans-serif",textAlign:"center"}}>Add Products</h1>
    <div className='admin_add'>
        <select value={Category}  onChange={(e)=>setCategory(e.target.value)} style={{width:"100%",padding:"6px",fontSize:"15px"}} >
            <option value="">Select</option>
            <option value="mugs">Mugs</option>
            <option value="cookingCutters">Cooking Cutters</option>
            <option value="fryers">Air Fryers</option>
            <option value="mixers">Mixers</option>
            <option value="lamps">Lamps</option>
            <option value="towels">Towels</option>
            <option value="blankets">Blankets</option>
            <option value="tree">Tree Skirts</option>
            <option value="garland">Garlands</option>
        </select>
        <div >
            <Input value={name}  onChange={(e)=>setName(e.target.value)} mt="10px" type="text"  placeholder='product name'></Input>
            <Input value={image}  onChange={(e)=>setUrl(e.target.value)} mt="10px" type="url"  placeholder='enter image URL'></Input>
            <Input value={price}  onChange={(e)=>setPrice(e.target.value)} mt="10px" type= "number"  placeholder='enter the price'></Input>
        </div>
        <div ><Button mt="10px" width={"60%"} ml="20%" bg="red" color="white"  onClick={handleSubmit}>Submit</Button></div>
    </div>
    </div>
  )
}

export default AdminAdd