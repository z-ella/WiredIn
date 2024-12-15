import React from "react";
import google from "./img/google.png";
import meta from "./img/meta.png";
import microsoft from "./img/microsoft.png";
import amazon from "./img/amazon.png";
import niceGuyWorking from './img/niceGuyWorking.jpeg'
const Home = () => (
  <div>
    {/* Title Section */}
    <section className="section">
      <center>
        <h1 className="title">WiredIn</h1><br />
        <h2 className="subtitle">
          Explore thousands of <strong>opportunities</strong>, customize your search, and connect with top companies. Start your career adventure with us today!
        </h2>
      </center>
    </section>

    {/* Horizontal Line */}
    <hr />

    {/* Sponsor Section */}
    <section className="section">
      <center>
        <h1 className="title">Our Sponsors</h1><br />
        <div className="columns is-centered">
          <div className="column sponsor-img">
            <img src={microsoft} alt="Microsoft" />
          </div>
          <div className="column sponsor-img">
            <img src={meta} alt="Meta" />
          </div>
          <div className="column sponsor-img amazon-sponsor">
            <img src={amazon} alt="Amazon" />
          </div>
          <div className="column sponsor-img">
            <img src={google} alt="Google" />
          </div>
        </div>
      </center>
    </section>

    {/* Horizontal Line */}
    <hr className="line2" />

    {/* About Us Section */}
    <section className="section" id="aboutUs">
      <center>
        <h1 className="title">About Us</h1><br />
      </center>
      <div className="columns">
        <div className="column is-half">
          <img src={niceGuyWorking} alt="Nice Guy Working" />
        </div>
        <div className="column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus animi, odio harum consequatur sint soluta assumenda consectetur amet saepe temporibus id fuga suscipit non labore culpa, perferendis perspiciatis eius voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, itaque cupiditate velit quasi ipsum autem animi nesciunt eius possimus. Qui hic voluptas officiis ab ut, quos libero delectus repudiandae et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur non ullam omnis eius tempora doloribus quibusdam minus possimus. Sint doloribus illo assumenda consectetur facere quis nostrum eum neque mollitia dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis delectus dolore, consequatur soluta vero facilis exercitationem unde ut a optio quae facere, mollitia deleniti explicabo corrupti fugit culpa quidem!
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
