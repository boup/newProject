import React from "react";
import Timeline from "./TimelineItem";
function TimeLine() {
  return (
    <>
      <div className="timeline-container">
        {mydata.map((item) => {
          return (
            <Timeline
              key={item.id}
              title={item.Title}
              description={item.description}
              color={item.color}
              date={item.date}
              tag={item.tag}
            />
          );
        })}
      </div>
    </>
  );
}

export default TimeLine;
