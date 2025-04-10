import React from 'react';

const TeamCard = ({ image, name, role, badges }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="team-card h-100">
        <div className="team-img-container">
          <img src={image} className="img-fluid" alt={name} />
        </div>
        <div className="card-body text-center p-4">
          <h5 className="card-title mb-2">{name}</h5>
          <p className="card-text mb-3">{role}</p>
          <div className="badges-container">
            {badges.map((badge, index) => (
              <span key={index} className="badge bg-warning text-dark me-1 mb-1">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;