import React from "react";
import "../CSS/About.css";
import profile from "../Component/profile.jpg";

const About = () => {
  return (
    <div >
      <div className="aboutm"  >
        <div className="info">
          <h1>Hi, I’m Jaywant</h1>
          <p>
            I built this personal photo gallery as a way to preserve and manage
            my favorite memories securely in the cloud. For me, it’s more than
            just a storage space. It’s a digital home for moments I don’t want
            to lose.
            <br />
            This project also reflects my passion for photography and web
            development, where I combined both interests to create something
            meaningful and practical.
          </p>
          <h2>✨ Features</h2>
          <ul>
            <li>✔ Upload and store my photos in Cloudinary</li>
            <li>✔ View them in a clean gallery layout</li>
            <li>✔ Delete photos when needed</li>
            <li>
              ✔ Only I can upload the my photoes, I put authentication with
              username and password while uploading photoes.
            </li>
          </ul>

          <h2>⚙️ Tech Stack: </h2>
          <p>
            React, Node.js, Express, Cloudinary <br />
          </p>
          <p className="text-gray-600">
            This project is special because it’s not only where I keep my
            personal photos safe, but also a showcase of my journey as a
            full-stack developer, blending creativity with technology.
            <span className="font-semibold">full-stack developer</span>. 🚀
          </p>
        </div>

        <div className="image">
          <img src={profile} alt="profile pic" />
        </div>
      </div>

      <div className="contact">
        <h2>Contact :</h2>
        <h3>
          e-mail :&nbsp;&nbsp;<a href="email">jawyantbelkhede@gmail.com</a>
        </h3>
        <h3>
          Instagram :&nbsp;&nbsp;
          <a href="https://www.instagram.com/jaywant__99/?hl=en" target="blank">
            https://www.instagram.com/jaywant__99/?hl=en
          </a>
        </h3>
        <h3>
          Linkedin : &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/jaywant-belkhede-6817b8230"
            target="blank"
          >
           
            linkedin.com/in/jaywant-belkhede-6817b8230{" "}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default About;
