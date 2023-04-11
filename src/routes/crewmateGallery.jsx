import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CrewmateGallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
          const {data} = await supabase
          .from('P7_Crewmates')
          .select()
          .order('created_at', { ascending: true })
    
          // set state
          setCrewmates(data)
        }
        fetchCrewmates();
      }, []);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/createCrewmate"; 
        navigate(path);
    }

    const moveToEditCrewmate = (event, id) =>{
        let path = "/updateCrewmate/" + id; 
        navigate(path);
    }

    return (
        <div className="gallery_page">
            <h1>Crewmate Gallery</h1>
            <div className="crewmate_container">
            {crewmates != null && crewmates.length > 0 ? (
                crewmates.map((crewmate,index) => 
               
                    <div className={"crewmate_card " + crewmate.color}>
                         <Link to={'/crewmateDetails/' + crewmate.id}>
                        <img className="crewmate_img" src='src/assets/crewmate_outline.png' />
                        </Link>
                        <h3>Name: <span className="crewmate_attribute">{crewmate.name}</span></h3>
                        <h3>Age: <span className="crewmate_attribute">{crewmate.age}</span></h3>
                        <h3>Speed: <span className="crewmate_attribute">{crewmate.speed}</span></h3>
                        <h3>Color: <span className="crewmate_attribute">{crewmate.color}</span></h3>
                        <button onClick={(event) => moveToEditCrewmate(event, crewmate.id)}>Update Crewmate</button>
                    </div>
                    
            )) : <div> 
                    <h2>No Crewmates Created 😔</h2>
                    <button onClick={routeChange}>Create one here!</button>
                </div>}
            </div>
        </div>
    );
  };
  
  export default CrewmateGallery;