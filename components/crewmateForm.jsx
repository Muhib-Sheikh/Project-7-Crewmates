import { useState } from "react";
import { supabase } from "../src/client";

const CrewmateForm = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'white', 'gray'];
    const [crewmate, setCrewmate] = useState({name: "", age: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async (event) => {
        
        event.preventDefault(); 

        await supabase
            .from('P7_Crewmates')
            .insert({name: crewmate.name, age: crewmate.age, speed: crewmate.speed, color: crewmate.color})
            .select();

            window.location = "/crewmateGallery";   
    }

    return (
        <div className="form_container">
            <form className="create_form">
            <div className="choice_container">
                <label for="name">Name</label> <br />
                <div className="card">
                    <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange}/>
                </div>
            </div>
            
            <div className="choice_container">
                <label for="age">Age</label><br />
                <div className="card">
                    <input type="text" id="age" name="age" value={crewmate.age} onChange={handleChange}/>
                </div>
            </div>
                
           <div className="choice_container">
                <label for="speed">Speed (mph)</label><br />
                <div className="card">
                    <input type="text" id="speed" name="speed" value={crewmate.speed} onChange={handleChange}/>
                </div>
           </div>
                
            <div className="choice_container">
                <label for="color">Color</label><br />
                <div className="card">
                    {colors.map((color) => (
                        <li key={color}>
                            <input 
                            id="color"
                            value={color}
                            name="color"
                            type="radio"
                            onChange={handleChange}
                            />
                            {color}
                        </li>
                ))}
                </div>
            </div>
            </form>
            <button type="submit" onClick={createCrewmate}>Create</button>
        </div>
    );
  };
  
  export default CrewmateForm;