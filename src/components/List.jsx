import { useParams } from 'react-router-dom';
import reactLogo from '../assets/react.svg'

function List(){
    const {id} = useParams();
    
    
    return (
        <>
        {id}
            <img src={reactLogo} className="logo react" alt="React logo" />
        </>
    )
}

export default List;