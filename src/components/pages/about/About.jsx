import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./About.css"
const About = ({ modal },setModal ) => {
  const { id } = useParams();
  return (
    <>
      {
        setModal&&<div className="modalOne">
          <div className="container">
            <div className="modal">
              <div className="modalContent">
                <button className="close" onClick={() => setModal(false)}>
                  X
                </button>

                <div className="images">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=900&h=500&s=1"
                    width="200"
                  />
                </div>
                <div className="writes">
                  <h2>name</h2>
                  <p>
                    <b>Population:</b> smsmwswk
                  </p>
                  <p>
                    <b>Region:</b> region
                  </p>
                  <p>
                    <b>Capital:</b> capital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default About;
