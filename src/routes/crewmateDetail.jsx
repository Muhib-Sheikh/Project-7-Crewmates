import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const CrewmateDetail = () => {
    const {id} = useParams();
    const [crewmate, setCrewmate] = useState({id: "", name: "", age: "", speed: "", color: ""});

    useEffect(() => {
        const getCrewmate = async () => {
            // get the crewmate associated with the id
            const {data, error} = await supabase
          .from('P7_Crewmates')
          .select()
          .eq('id', id);
          console.log(data[0].color);
          setCrewmate({id: data[0].id, name: data[0].name, age: data[0].age, speed: data[0].speed, color: data[0].color});
        }

        getCrewmate();
    }, []);

    let navigate = useNavigate(); 

    const moveToEditCrewmate = (event, id) =>{
        let path = "/updateCrewmate/" + id; 
        navigate(path);
    }

    return (
        <div className="crewmate_detail">
            <h2>Crewmate: {crewmate.name}</h2>
            <h2>Stats:</h2>
            <h3>Age: {crewmate.age}</h3>
            <h3>Color: {crewmate.color}</h3>
            <h3>Speed: {crewmate.speed}</h3>
            {crewmate.speed < 5.0 ? (
                <h4>This crewmate is kind of slow, maybe get a faster one</h4>
            ) : <h4>This crewmate is pretty quick!</h4>}
            <button onClick={(event) => moveToEditCrewmate(event, crewmate.id)}>Want to Update Crewmate?</button>
        </div>
    );
  };
  
  export default CrewmateDetail;