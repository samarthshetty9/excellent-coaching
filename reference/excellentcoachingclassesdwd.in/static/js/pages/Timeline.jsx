// import React from "react";
// import "./Style.css";
// import { MdOutlineAccessTime } from "react-icons/md";
// import clock from "../assets/clock.png";
// import { MdAccessTime } from "react-icons/md";
// function TimelineItem({ logo, companyName, date, description, isLeft }) {
//   return (
//     <div
//       className={`container ${isLeft ? "left-container" : "right-container"}`}
//     >
//       {/* Conditionally render the image based on the isLeft prop */}
//       {!isLeft && <img src={clock} alt="" />}
//       <div className="text-box">
//         <h2>{companyName}</h2>
//         <small>{date}</small>
//         <p>{description}</p>
//         <span
//           className={`${isLeft ? "left-container" : "right-container"}-arrow`}
//         ></span>
//       </div>
//     </div>
//   );
// }
// function Timeline() {
//   return (
//     <div className="timeline">
//       <TimelineItem
//         logo="logo.png"
//         companyName="1996"
//         // date="2018 - 2019"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={true}
//       />
//       <TimelineItem
//         // logo="logo.png"
//         // companyName="Amazon"
//         date="4 Students"
//         // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, autem."
//         isLeft={false}
//       />
//       <TimelineItem
//         logo="logo.png"
//         // companyName="Alphabet inc"
//         date="60 Students"
//         // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, autem."
//         isLeft={true}
//       />
//       <TimelineItem
//         logo="logo.png"
//         companyName="2000"
//         // date="2018 - 2019"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={false}
//       />
//       <TimelineItem
//         logo="logo.png"
//         companyName="2005"
//         // date="2018 - 2019"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={true}
//       />
//       <TimelineItem
//         logo="logo.png"
//         // companyName="Amazon"
//         date="400 Students"
//         // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, autem."
//         isLeft={false}
//       />
//       <TimelineItem
//         logo="logo.png"
//         // companyName="Tesla"
//         date="400 Students"
//         // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, autem."
//         isLeft={true}
//       />
//       <TimelineItem
//         logo="logo.png"
//         companyName="2010"
//         // date="400 Students"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={false}
//       />
//       <TimelineItem
//         logo="logo.png"
//         companyName="2015"
//         // date="2018 - 2019"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={true}
//       />
//       <TimelineItem
//         logo="logo.png"
//         // companyName="2015"
//         date="400 Students"
//         // description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         // isLeft={false}
//       />
//       <TimelineItem
//         logo="logo.png"
//         // companyName="1996"
//         date="400 Students"
//         // description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={true}
//       />
//       <TimelineItem
//         // logo="logo.png"
//         companyName="2020"
//         // date="4 Students"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={false}
//       />
//       <TimelineItem
//         logo="logo.png"
//         companyName="2024"
//         // date="2018 - 2019"
//         description="boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs"
//         isLeft={true}
//       />
//       <TimelineItem
//         // logo="logo.png"
//         // companyName="Amazon"
//         date="4 Students"
//         // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, autem."
//         isLeft={false}
//       />
//     </div>
//   );
// }
// export default Timeline;
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegClock } from "react-icons/fa6";

const Timeline = () => {
  return (
    <>
      <div
        className="experience"
        // style={{ height: "400px", overflowY: "scroll" }}
      >
        <VerticalTimeline lineColor="#941932" className="animated-timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span
                style={{
                  color: "#941932",
                  fontSize: "25px",
                }}
              >
                1996
              </span>
            }
          >
            <h1>4 Students</h1>
            <p>
              Journey began with 4 students, aiming to provide quality education
              in our coaching classes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span style={{ color: "#941932", fontSize: "25px" }}>2000</span>
            }
          >
            <h1>60 Students</h1>
            <p>
              First major triumph with a student achieving a top rank in their
              respective field.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span style={{ color: "#941932", fontSize: "25px" }}>2005</span>
            }
          >
            <h1>200 Students</h1>
            <p>
              Expanded infrastructure and enriched faculty for a holistic
              learning experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span style={{ color: "#941932", fontSize: "25px" }}>2010</span>
            }
          >
            <h1>1500 Students</h1>
            <p>
              Integrated digital learning tools to make education more engaging.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span style={{ color: "#941932", fontSize: "25px" }}>2015</span>
            }
          >
            <h1>3000 Students</h1>
            <p>
              Celebrated enrollment of over 3000 students, marking growing
              trust.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span style={{ color: "#941932", fontSize: "25px" }}>2020</span>
            }
          >
            <h1>6000 Students</h1>
            <p>
              Achieved consistent top ranks in various fields, bolstering our
              reputation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#941932", color: "#fff" }}
            icon={<FaRegClock />}
            date={
              <span style={{ color: "#941932", fontSize: "25px" }}>2024</span>
            }
          >
            <h1>10000 Students</h1>
            <p>
              Reached a milestone with over 10000 students, symbolizing
              commitment and adaptability.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
