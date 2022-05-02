import React from "react"
import "../stylesheets/education-card-stylesheet.css"


let EducationCard = () => {
    return (
       <div>
       <div className="outer-container-top">
        <div>
                <h2>Education</h2>
        </div>
        <div>
                <i className="bi bi-plus-lg"></i>
                <i className="bi bi-pencil"></i>
        </div>
        </div>
            <div className="outer-lower-container">
                <div>

                <i class="bi bi-square"></i>
                </div>
                <div>
                <h4>Copenhagen Business School</h4>
                <p>Master, Management of Innovation & Business Developemnt</p>
                <p>2020 - 2022</p>
            </div>
            
            </div>
     </div>
    
    )
}

export default EducationCard