import React, {useState, Fragment }  from 'react';
import symptom from '../data/symptom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'



const Diagnostic = () => {

    const [value, setValue] = React.useState('Si');
    const [value2, setValue2] = React.useState('Si');
    const [value3, setValue3] = React.useState('Si');
    const [value4, setValue4] = React.useState('Si');
    
    const [end, setend] = useState();
    const [diagnosticValue, setDiagnosticValue] = useState("");

    {/**talla baja */}
    const [taba, setTaba] = useState();
    {/**anomalias craneofaciales*/}
    const [ancra, setAncra] = useState();
    {/**macrocefalia */}
    const [macsef, setMacsef] = useState();
    {/**compromiso neurologico */}
    const [compneu, setCompneu] = useState();
    const [alrderma, setAlrderma] = useState();
    const [manchas, setManchas] = useState();
    const [hiper, setHiper] = useState();
    const [cardio, setCardio] = useState();
    const [malforAlter , setmalforAlter ] = useState();
    const [malforcapi, setMalforcapi] = useState();
    const [lipo, setLipo] = useState();
    const [estepu, setEstepu] = useState();
    const [alterEKG, setAlterEKG] = useState();
    const [querapil, setQuerapil] = useState();
    const [cabelloAn, setCabelloAn] = useState();
    const [lentimulti, setLentimulti] = useState();
    const [cefac, setCefac] = useState();
    const [cardihiper, setCardihiper] = useState();
    const [papilomas, setPapilomas] = useState();


    const usingTree = () => {
        

        var fs = require('fs'), RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;
        var data = symptom
        var testdata = [

            {        
                "talla baja": taba,
                "anomalias craneofaciales": ancra,
                "macrocefalia": macsef,
                "compromiso neurologico": compneu,
                "alteraciones dermatologicas": alrderma,
                "manchas cafe con leche, efelides inguinales y axilares, nodulos subcutaneos": manchas,
                "hipeterlorismo, orejas implantacion baja rotadas, fisuras palpebrales inclinadas hacia abajo, puente nasal deprimido, micrognatia": hiper,
                "cardiopatia": cardio,
                "malformación arteriovenosa": malforAlter,
                "malforación capilar": malforcapi,
                "lipomas, machas café con leche. efelides inguinales": lipo,
                "estenosis pulmonar": estepu,
                "alteraciones EKG: arritmia": alterEKG,
                "queratosis pilaris": querapil,
                "cabello anágeno suelto": cabelloAn,
                "lentigos multiples": lentimulti,
                "cejas escasas, facies toscas": cefac,
                "cardiomiopatia hipertrófica": cardihiper,
                "papilomas alas nasales, uñas concavas, hipertrofia gingival": papilomas,
            },
        ];

        var rf = new RandomForestClassifier({
            n_estimators: 5
        });

        rf.fit(data, null, "name", function (err, trees) {
            //console.log(JSON.stringify(trees, null, 4));
            var pred = rf.predict(testdata, trees);
            setDiagnosticValue(pred[0]);
            console.log(pred);

            // pred = ["virginica", "setosa"]
        });
    }


    const verify = () =>{
        console.log("taba:" + taba);
        console.log("ancra:" + ancra);
        console.log("macsef:" + macsef);
        console.log("compneu:" + compneu);
        console.log("alrderma:" + alrderma);
        console.log("manchas:" + manchas);
        console.log("hiper:" + hiper);
        console.log("cardio:" + cardio);
        console.log("malforAlter:" + malforAlter);
        console.log("malforcapi:" + malforcapi);
        console.log("lipo:" + lipo);
        console.log("estepu:" + estepu);
        console.log("alterEKG:" + alterEKG);
        console.log("querapil:" + querapil);
        console.log("cabelloAn:" + cabelloAn);
        console.log("lentimulti:" + lentimulti);
        console.log("cefac:" + cefac);
        console.log("cardihiper:" + cardihiper);
        console.log("papilomas:" + papilomas);
    }
    const checkSymptoms =()=>{
        if(taba == null){
            setTaba(false);
        } 
        if(ancra == null){
            setAncra(false);
        }
        if(macsef == null){
            console.log("entro");
            setMacsef(false); 
        }
        if(compneu == null){
            setCompneu(false);
        }
        if(alrderma == null){
            setAlrderma(false);
        }
        if(manchas == null){
            setManchas(false);
        }
        if(hiper == null){
            setHiper(false);
        }
        if(cardio == null){
            setCardio(false);
        }
        if(malforAlter == null){
            setmalforAlter(false);
        }
        if(malforcapi == null){
            setMalforcapi(false);
        }
        if(lipo == null){
            setLipo(false);
        }
        if(estepu == null){
            setEstepu(false);
        }
        if(alterEKG == null){
            setAlterEKG(false);
        }
        if(querapil == null){
            setQuerapil(false);
        }
        if(cabelloAn == null){
            setCabelloAn(false);
        }
        if(lentimulti == null){
            setLentimulti(false);
        }
        if(cefac == null){
            setCefac(false);
        }
        if(cardihiper == null){
            setCardihiper(false);
        }
        if(papilomas == null){
            setPapilomas(false);
        }
    }

    const handleChange = (event) => {
        
        
        if(event.target.value == "SiTaba"){
            
            setTaba(true);
            setValue(event.target.value);
        }else if(event.target.value == "NoTaba"){
            
            setTaba(false);
            setValue(event.target.value);
        }else if(event.target.value == "SiAnacra"){
            
            setAncra(true);
            setAlrderma(false);
            setValue2(event.target.value);
                       
        }else if(event.target.value == "NoAnacra"){
            
            setAncra(false);
            setValue2(event.target.value);
            
        }else if(event.target.value == "SiAlrderma"){
            
            setAlrderma(true);
            setAncra(false);
            setValue2(event.target.value);
            
        }else if(event.target.value == "NoAlrderma"){
            setAlrderma(false);
            setend(true);
            setValue2(event.target.value);
            
        }else if(event.target.value == "SiMasef"){
            console.log("entro");
            setMacsef(true);
            setHiper(false);
            setmalforAlter(false);
            setManchas(false);
            setLipo(false);
            setValue3(event.target.value);

        }else if(event.target.value == "NoMasef"){
            console.log("entro");
            setMacsef(false);
            setValue3(event.target.value);

        }else if(event.target.value == "SiHiper"){
            setHiper(true);
            setMacsef(false);
            setmalforAlter(false);
            setMalforcapi(false);
            setManchas(false);
            setLipo(false);
            setValue3(event.target.value);
            
        }else if(event.target.value == "NoHiper"){
            setHiper(false);
            setValue3(event.target.value);
        }else if(event.target.value == "MalforAlter"){
            setmalforAlter(true);
            setMalforcapi(true);
            setHiper(false);
            setMacsef(false);
            setValue3(event.target.value);
        }else if(event.target.value == "Manchas"){
            setManchas(true);
            setHiper(false);
            setMacsef(false);
            setValue3(event.target.value);
        }else if(event.target.value == "Lipo"){
            setLipo(true);
            setHiper(false);
            setMacsef(false);
            setValue3(event.target.value);
        }else if(event.target.value == "SiCompneu"){
            setCompneu(true);
            setValue4(event.target.value);

        }else if(event.target.value == "NoCompneu"){
            setCompneu(false);
            setValue4(event.target.value);
        }else if(event.target.value == "SiCardio"){
            setCardio(true);
            setValue4(event.target.value);
            
        }else if(event.target.value == "NoCardio"){
            setCardio(false);
            setValue4(event.target.value);
        }

    };

    const tercerCruce = () =>{
       if(ancra == true && taba == true){
            return "¿Presenta hiperterlorismo, orejas implantacion baja, fisuras palpebrales inclinadas hacia abajo"
            +", puente nasal deprimido. micrognatia?"; 
       }else if(ancra == false && taba == true)  {
           return "¿Presenta macrosefalia?";
       }else if( alrderma == true && taba == false){
           return "¿Cuál?"
       }else if( alrderma == false && taba == false){
            return "fin del proceso"
       }
       
    }

    const section3Options = () =>{

        if(ancra == false && taba == true){
            return(
                <>
                    <RadioGroup value={value3} onChange={handleChange}>
                        <FormControlLabel value={"SiMasef"} control={<Radio />} label="Si" />
                        <FormControlLabel value={"NoMasef"} control={<Radio />} label="No" />
                    </RadioGroup>
                </>
            );
       }else if(ancra == true && taba == true)  {
            return(
                <>
                     <RadioGroup value={value3} onChange={handleChange}>
                        <FormControlLabel value={"SiHiper"} control={<Radio />} label="Si" />
                        <FormControlLabel value={"NoHiper"} control={<Radio />} label="No" />
                    </RadioGroup>
                
                </>
            );
           
       }else if( alrderma == true && taba == false){
            return(
                <>
                 <RadioGroup value={value3} onChange={handleChange}>
                        <FormControlLabel value={"MalforAlter"} control={<Radio />} label="Malformación capilar y malformación arteriovenosa" />
                        <FormControlLabel value={"Manchas"} control={<Radio />} label="manchas cafe con leche, efelides inguinales y axilares, nodulos subcutaneos" />
                        <FormControlLabel value={"Lipo"} control={<Radio />} label="lipomas, machas café con leche. efelides inguinales" />
                    </RadioGroup>
                
                </>
        );
           
       }else if( alrderma == false && taba == false){
        checkSymptoms();
        verify();
            return(
                <>
                            
                </>
            );   
       }
        
    }

    const section1 = ()=>{
        return (
            <>
                <FormLabel component="legend">¿Presenta talla baja?</FormLabel>
                    <RadioGroup aria-label="Talla baja" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="SiTaba" control={<Radio />} label="Si" />
                        <FormControlLabel value="NoTaba" control={<Radio />} label="No" />
                    </RadioGroup>
            </>
        );
    }

    const section2 = ()=>{
       
       if(taba != null){
           return(
           <>
                       <FormLabel component="legend">
                           {taba ? "¿Presenta anomalias Craneofaciales?": "¿Tiene alteraciones dermatologicas?"}
                       </FormLabel>
                       <RadioGroup value={value2} onChange={handleChange}>
                           <FormControlLabel value={taba ? "SiAnacra":"SiAlrderma"} control={<Radio />} label="Si" />
                           <FormControlLabel value={taba ? "NoAnacra":"NoAlrderma"} control={<Radio />} label="No" />
                       </RadioGroup>
           </>
           );
       }
    }


    const section3 = ()=>{
        if( ancra != null || alrderma != null){
            return (
                <>
                    <FormLabel component="legend">
                    {tercerCruce()}
                    </FormLabel>
                    {section3Options()}
                </>
            );
        }
    }

    const section4 = ()=>{
        if(macsef == true){
            return(
                <>
                <FormLabel component="legend">
                           "¿Presenta compromiso neurologico?"
                       </FormLabel>
                       <RadioGroup value={value4} onChange={handleChange}>
                           <FormControlLabel value={"SiCompneu"} control={<Radio />} label="Si" />
                           <FormControlLabel value={"NoCompneu"} control={<Radio />} label="No" />
                       </RadioGroup>
                </>
            );
        }else if(macsef == false){
            return(
                <>
                <FormLabel component="legend">
                           "¿Presenta una cardiopatia?"
                       </FormLabel>
                       <RadioGroup value={value4} onChange={handleChange}>
                           <FormControlLabel value={"SiCardio"} control={<Radio />} label="Si" />
                           <FormControlLabel value={"NoCardio"} control={<Radio />} label="No" />
                       </RadioGroup>
                </>
            );
        }else if(hiper == true){
            return(
                <>
                    <FormLabel component="legend">
                           {"¿Presenta una cardiopatia?"}
                       </FormLabel>
                       <RadioGroup value={value4} onChange={handleChange}>
                           <FormControlLabel value="SiCardio" control={<Radio />} label="Si" />
                           <FormControlLabel value="NoCardio" control={<Radio />} label="No" />
                       </RadioGroup>
                </>
            );
        }else if(malforAlter == true){
            checkSymptoms();
            verify();
            return(
                <>
                   <FormLabel component="legend">
                           fin del proceso
                    </FormLabel>
                </>
            );
        }else if(manchas == true){
            checkSymptoms();
            verify();
            return(
                <>
                <FormLabel component="legend">
                           fin del proceso
                </FormLabel>
                            
                </>
            );   
       }else if(lipo == true){
            checkSymptoms();
            verify();
            return(
                <>
                    <FormLabel component="legend">
                            fin del proceso
                    </FormLabel>
                                
                        
                </>
            );   
        }     
    }

    const section5 =() =>{
        if(compneu == true){
            return(
                <>
                    <FormLabel component="legend">
                           {"¿Tiene alteraciones dermatologicas?"}
                       </FormLabel>
                       <RadioGroup value={value4} onChange={handleChange}>
                           <FormControlLabel value="SiAlrderma" control={<Radio />} label="Si" />
                           <FormControlLabel value="NoAlrderma" control={<Radio />} label="No" />
                       </RadioGroup>
                </>
            );
        }
    }

    return(
        <Fragment>
            <form className="colums">
                <div>
                <FormControl component="fieldset">
                    {section1()}
                    {section2()}
                    {section3()}
                    {section4()}
                </FormControl>
                </div>
                <div>
                <Button 
                    variant="contained"
                    color="primary" 
                    onClick={usingTree}>
                        Diagnosticar
                    </Button>
                </div>
                <div>
                    {diagnosticValue}
                </div>
            </form>
            
                
            
        </Fragment>
    );


   


}

export default Diagnostic