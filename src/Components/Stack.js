

const MyStack = () =>{
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
         <div className = "card green">
         
         <ul >
         <h4>My Hobbies</h4> 
            <li>{me.stack[0]}</li>
            <li>{me.stack[1]}</li>
            <li>{me.stack[2]}</li>
            <li>{me.stack[3]}</li>

        </ul>
           </div>
             
         </>   
           
      )
     
    }
    export default MyStack;