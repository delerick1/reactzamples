import '../App.css';

 const About = () =>{
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
     <div className = "card red">
       

        <ul >
            <li><b>Names: </b>{me.name}</li>
            <li><b>Age: </b>{me.age}</li>
            <li><b>Favorite Movie: </b>{me.movie}</li>
            <li><b>Favorite Music: </b>{me.music}</li>
        </ul>
       
      
        </div>
     </>   
       
  )
 
}

export default About;
