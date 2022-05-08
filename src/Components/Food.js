


const MyFood = () =>{
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
         <div className = "Card">
         
         <ul >
         <h4>My freetime</h4> 
            <li>{me.food[0]}</li>
            <li>{me.food[1]}</li>
            <li>{me.food[2]}</li>


        </ul>
           </div>
             
         </>   
           
      )
     
    }
    export default MyFood;