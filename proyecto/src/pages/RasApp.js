import '../App.css';
import HeroSection from '../components/HeroSection';
import {rasAppObjOne} from './DataRasApp';

function RasApp(){
    return(
        <>
        <HeroSection {...rasAppObjOne}/>
    </>
    );
}

export default RasApp