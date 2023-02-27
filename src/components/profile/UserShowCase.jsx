import React from 'react';

function UserShowCase(props) {
    return (
        <div className="experience-showcase-container box-shadow">
        <div className="experience-showcase-head">
          <span className="experience-showcase-head-title">
            Kullanıcının deneyimli olduğu alanlar
          </span>
        </div>
        <div className="experience-showcase-body d-flex">
            <h4>
              <span class="badge bg-secondary">Deneyim -1</span>
            </h4>
            <h4>
              <span class="badge bg-secondary">Deneyim -1</span>
            </h4>
            <h4>
              <span class="badge bg-secondary">Deneyim -1</span>
            </h4>
   
        </div>
      </div>
    );
}

export default UserShowCase;