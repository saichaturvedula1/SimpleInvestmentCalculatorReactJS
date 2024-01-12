

export default function UserInput({userData,onInputChange}){

   

    return (
        <section id="user-input">
        <div className="input-group">
         <p>
          <label>Initial Investment</label>
          <input type="number" value={userData.initialInvestment} required onChange={(event) => onInputChange('initialInvestment',event.target.value)}></input>
         </p>
         <p>
          <label>Annual Investment</label>
          <input type="number" value={userData.annualInvestment} required onChange={(event) => onInputChange('annualInvestment',event.target.value)}></input>
         </p>
        </div>
        
        <div className="input-group">
         <p>
          <label>Expected Return</label>
          <input type="number" value={userData.expectedReturn} required onChange={(event) => onInputChange('expectedReturn',event.target.value)}></input>
         </p>
         <p>
          <label>Duration</label>
          <input type="number" value={userData.duration} required onChange={(event) => onInputChange('duration',event.target.value)}></input>
         </p>
        </div>
        </section>
    )
}