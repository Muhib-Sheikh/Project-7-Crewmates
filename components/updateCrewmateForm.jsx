import { useEffect, useState } from "react";
import { supabase } from "../src/client";
import { useParams } from 'react-router-dom';

const UpdateCrewmateForm = () => {
    const {id} = useParams();
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'white', 'gray'];
    const [crewmate, setCrewmate] = useState({name: "", age: "", speed: "", color: ""});

    useEffect(() => {
        const getCrewmate = async () => {
            // get the crewmate associated with the id
            const {data, error} = await supabase
          .from('P7_Crewmates')
          .select()
          .eq('id', id);
          console.log(data[0].color);
          setCrewmate({name: data[0].name, age: data[0].age, speed: data[0].speed, color: data[0].color});
        }

        getCrewmate();
    }, [])

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('P7_Crewmates')
        .update({name: crewmate.name, age: crewmate.age, speed: crewmate.speed, color: crewmate.color})
        .eq('id', id);

        window.location = "/crewmateGallery";
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('P7_Crewmates')
        .delete()
        .eq('id', id);

        window.location = "/crewmateGallery";
    }

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

    return (
            <div className="form_container">
            <form className="update_form">
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
                            checked ={crewmate.color === color}
                            />
                            {color}
                        </li>
                ))}
                </div>
            </div>
            </form>
            <button type="submit" onClick={updateCrewmate}>Update</button>
            <button type="submit" onClick={deleteCrewmate}>Delete Crewmate</button>
        </div>
    );
  };
  
  export default UpdateCrewmateForm;