import "./Contact.css";
import CallMadeIcon from '@mui/icons-material/CallMade';
export default function Contact (){
 return (
   <div className="contact_div">
            <h3 className = "titleContact">Contact</h3>
            <hr className = "traitContact"></hr>
        <span className="email">Email:</span>
        <span className="emailContent">mehdiamarti33@gmail.com</span>
       <span className= "reseaux_sociaux">Reseaux Sociaux</span>
       <CallMadeIcon className = "arrow" />
       <a href = "https://www.instagram.com/mehdi__amarti/"   target="_blank" className = "linkedin"> el mehdi amarti riffi</a>
        </div>
 );
    

}
