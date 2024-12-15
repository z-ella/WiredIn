import React from "react";

const JobCard = ({ title, company, description, tags, image }) => {
  return (
    <div className="card">
      <div className="card-image">
       
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image} alt={`${title} logo`} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">@{company}</p>
          </div>
        </div>
        <div className="content">
          <p>{description}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag is-dark">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <button className="button is-link card-footer-item">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
