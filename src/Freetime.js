
import './style/component1.css'

const MyFreetime = () =>{
  const me = {
    name:"Erick",
    age: "24" ,
    movie:"Big Daddy",
    music:"Rap",
    hobbies: ["music","Gym", "Video games", "Movies"],
    stack: ["HTML", "CSS", "JavaScrip", "React"],
    food: ["steak","pizza", "Hambuagers"],
    freetime: ["eat", "friends", "netflix"]
  }
  

    
    
      return (
        <>
         <div className = "App">
         
         <ul >
         <h4>My freetime</h4> 
            <li>{me.freetime[0]}</li>
            <li>{me.freetime[1]}</li>
            <li>{me.freetime[2]}</li>
         

        </ul>
           </div>
             
         </>   
           
      )
     
    }
    export default MyFreetime;