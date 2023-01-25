// function Show({user}) {
//   console.log(user)

//   const Loaded = () => {
//     return (
//   <div key={user._id} className="user">
//                 <h2>{user.name}</h2>
//                 <h3>{user.occupation}</h3>
//                 <h3>{user.bio}</h3>
//                 { user.headshot &&
//                     <img src={user.headshot} alt={user.name} />
//                 }
//     <h3>Skills: {user.skills}</h3>
//        </div>
//     )
//   }
//   return user ? Loaded() : <h1>Loading...</h1>
// }
// export default Show;






import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Show(props, {portfolio}) {
    //accesses the id from url params
    const { uid } = useParams();


//     //uses the id to find the specific user’s portfolio info (data) in the array to show
     const data = props.user ? props.user.find(data => data.uid === uid) : null;

//     //uses the id to find the specific user’s project info (project) in the array to show
//     //const project = props.portfolio ? props.portfolio.find(project => project._id === id) : null;
// 	///////// Do I need to establish a new variable to access the portfolio schema or can I 
// 	///////// use the portfolio key within user schema …. If so, how to I call different key-
// 	///////// value pairs from a schema to schema reference?



	const loaded =() => {
        return (
            <div className="data">
              <div className='portheader'>
                <span class="name">{data.name}</span>
                <span class="occupation">{data.occupation}</span>
		            <h3 class="bio">{data.bio}</h3>
                </div>

                { data.headshot && 
                    <img src={data.headshot} alt={data.name} class="profilepic"/>
                }
                 <hr></hr>
           
		        <h3 class="skillsTitle">Skills </h3>
            <span class="skills" >{data.skills} </span>
            {data.portfolio}

            <h3 class="socials">Contact </h3>
            <span class="sociallinks" >
              <p><a href={data.github}>{data.github}</a></p>
              <p><a href={data.linkedin}>{data.linkedin}</a></p>
              <p><a href={data.email}>{data.email}</a></p>
            </span>
        
         

            </div>

        
  
          
         )
       }
     

       const loading = () => {
        	return <h2> Loading...</h2>
    	};


	return (
        	<section>
           		 { props.user ? loaded() : loading() }
       		</section>
    	)

  }
  
  export default Show;

