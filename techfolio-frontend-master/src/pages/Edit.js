import { useState } from "react";
import { useParams } from "react-router-dom";
function Edit(props){
  //props has user, portfolio,  getUser, getPortfolio, updateUser,
  // updatePortfolio, and deletePortfolio
  console.log(props)
  let {id} = useParams()
  const currentPortfolio = props.portfolio.find(obj => obj._id === id)
  const userId = props.user[0]._id

  let formFieldsUser = {
    name:props.user[0].name,
    occupation:props.user[0].occupation,
    bio:props.user[0].bio,
    skills: props.user[0].skills,
    linkedin: props.user[0].linkedin,
    github: props.user[0].github,
  }
  let formFieldsPortfolio = {
    projectName: currentPortfolio.projectName,
    summary: currentPortfolio.summary,
    technology: currentPortfolio.technology,
    screenShots: currentPortfolio.screenShots,
    projectGithub: currentPortfolio.projectGithub,
    uid: id,
  }
  const [newFormUser, setNewFormUser] = useState(formFieldsUser)
  const [newFormPortfolio, setNewFormPortfolio] = useState(formFieldsPortfolio)

  const handleChangeUser = (e) => {
    setNewFormUser({
      ...newFormUser,
      [e.target.name]:e.target.value
    })
  }
  const handleChangePortfolio = (e) => {
    setNewFormPortfolio({
      ...newFormPortfolio,
      [e.target.name]:e.target.value
    })
    console.log('PORTFOLIO IS: ', props.portfolio)
  }
  const handleSubmitUser = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:4000/user/' + userId, {
        method: 'PUT',
        headers: {'Content-type': 'Application/json'},
        //set req body
        body: JSON.stringify(newFormUser),
  })
    
  }
  const handleSubmitPortfolio = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:4000/portfolio/'+id, {
        method: 'PUT',
        headers: {'Content-type': 'Application/json'},
        //set req body
        body: JSON.stringify(newFormPortfolio),
  })}

  return(
    <div>
      <form onSubmit={handleSubmitUser} className='form-container'>
        <label>
          Name
          <input type="text" name='name' onChange={handleChangeUser} value={newFormUser.name}/>
        </label><br />
        <label>
          Occupation
          <input type="text" name='occupation' onChange={handleChangeUser} value={newFormUser.occupation}/>
        </label><br />
        <label>
          Bio
          <input type="text" name='bio' onChange={handleChangeUser} value={newFormUser.bio}/>
        </label><br />
        <label>
          Skills
          <input type="text" name='skills' onChange={handleChangeUser} value={newFormUser.skills}/>
        </label><br />
        <label>
          Linkedin
          <input type="text" name='linkedin' onChange={handleChangeUser} value={newFormUser.linkedin}/>
        </label><br />
        <label>
          Github
          <input type="text" name='github' onChange={handleChangeUser} value={newFormUser.github}/>
        </label><br />
        <br />
        <button type="submit">Update User</button>
      </form>
    
      <form onSubmit={handleSubmitPortfolio} className='form-container'>
        <label>
          Project Name
          <input type="text" name='projectName' onChange={handleChangePortfolio} value={newFormPortfolio.projectName}/>
        </label><br />
        <label>
          Summary
          <input type="text" name='summary' onChange={handleChangePortfolio} value={newFormPortfolio.summary}/>
        </label><br />
        <label>
          Technology
          <input type="text" name='technology' onChange={handleChangePortfolio} value={newFormPortfolio.technology}/>
        </label><br />
        <label>
          Screenshots URL
          <input type="text" name='screenShots' onChange={handleChangePortfolio} value={newFormPortfolio.screenShots}/>
        </label><br />
        <label>
          Project's Github URL
          <input type="text" name='projectGithub' onChange={handleChangePortfolio} value={newFormPortfolio.projectGithub}/>
        </label><br />
        <br />
        <button type="submit">Update Portfolio</button>
      </form>

      {/* <button onClick={props.deletePortfolio()}>DELETE PORTFOLIO</button> */}

    </div>

  )
  } 
  
  export default Edit