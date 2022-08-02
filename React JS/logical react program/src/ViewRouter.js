import {useParams} from 'react-router-dom';

function ViewRouter(){
 let para=useParams();
 console.log(para.resume_id);

}
export default ViewRouter;