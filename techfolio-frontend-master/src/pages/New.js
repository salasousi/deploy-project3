import { useState } from "react"
function New(props){
  const formFields = {
    projectName:'',
		summary:'',
		technology: '',
		screenShots:'',
		projectGithub:'',
  }
  const [newForm, setNewForm] = useState(formFields)
  const handleSubmitPortfolio = (e) => {
    e.preventDefault()
    props.createPortfolio(newForm)
    setNewForm(formFields)
  }
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
		setNewForm({
			...newForm,
			[e.target.name]: e.target.value,
		});
	};
  return(
      <div className='form-container'>
  
      <form onSubmit={handleSubmitPortfolio}>
        <label>
          Project Name
          <input type="text" name='projectName' onChange={handleChange} value={newForm.projectName}/>
        </label><br />
        <label>
          Summary
          <input type="text" name='summary'  onChange={handleChange} value={newForm.summary}/>
        </label><br />
        <label>
          Technology
          <input type="text" name='technology'  onChange={handleChange} value={newForm.technology}/>
        </label><br />
        <label>
          Screenshot
          <input type="text" name='screenShots'  onChange={handleChange} value={newForm.screenShots}/>
        </label><br />
        <label>
          Github URL
          <input type="text" name='projectGithub'  onChange={handleChange} value={newForm.projectGithub}/>
        </label><br />
        <button type="submit">Create New Portfolio</button>
      </form>

    </div>
    )
  } 
  
  export default New; 