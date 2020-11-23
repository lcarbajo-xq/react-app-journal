import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.guim.co.uk/img/media/f025fe83886f2ade710405887b4cb148e45c5be0/277_329_3440_2064/master/3440.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=dc773a145a381adbc3f0e97653d0e988)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo concierto</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Sunday</span>
        <h4>22</h4>
      </div>
    </div>
  );
};
