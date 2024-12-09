import './Apropos.css';
export default function Propos(){
   
    return  <>
        <div className="A_propos">
            <h3 className = "title">À Propos</h3>
            <hr className = "trait"/>
            <p className="intro">Hey ,je suis El Mehdi Amarti Riffi ,
            Je suis ingénieur full stack en utilisant React pour le front-end 
            et spring boot pour le back-end ,je suis passionne par le developpement web
            et je suis toujours curieux d'apprendre plus sur les nouvelles technologies et le creative coding.
            </p>
        </div>
        <a
        href="/CV El Mehdi Amarti Riffi.pdf"
        target="_blank"
        rel="noopener noreferrer"
        id="lien"
      >curriculum vitae(CV)</a>
               <div className='divImage'>
               <img src="/photo mehdi.jpg" alt="description de l'image"  id  = "image" ></img> 
               </div >
         </>
    
}