import React from "react";
import "./timer.scss";
function TimelineItem({ title, description, tag }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" sytle={{ background: "#e17b77" }}>
          {tag}
        </span>

        <a href={description} target="_blank" rel="noopener noreferrer">
          {title}
        </a>

        <span className="circle" />
      </div>
    </div>
  );
}
export default TimelineItem;
