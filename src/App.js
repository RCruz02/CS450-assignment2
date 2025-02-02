import React,{Component} from "react";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import "./App.css";

class App extends Component {
  header = [{
      name:"Zh Rimel", 
      major: "Data Scientist", 
      email: "abc@gmail.com", 
      web: "abc.github.io/abc", 
      mobile: "01234567890"}]
  profile = [{
      title: "Personal Profile",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`
   }]
   experience = [{
      title: "Work Experience",
      job1: "Job Title at Company (August 2022 – December 2023)",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      job2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
      content2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`
   }]
   skills = [{
      title: "Key Skills",
      skill1: "A Key skill",
      skill2: "A Key skill",
      skill3: "A Key skill",
      skill4: "A Key skill",
      skill5: "A Key skill",
      skill6: "A Key skill",
      skill7: "A Key skill",
      skill8: "A Key skill",
      skill9: "A Key skill"
   }]
   education = [{
      title: "Education",
      school1: "New Jersey Institute of Technology",
      major1: "BS in Computer Science",
      date1: "2018 - 2022",
      gpa1: "GPA: 3.9",
      school2: "New Jersey Institute of Technology",
      major2: "MS in Data Science",
      date2: "2022 - 2023",
      gpa2: "GPA: 4.0"
   }]
  render() {
    return(
      <div>
        <div class="container">
        {this.header.map(item => (
          <Header key={item.name} name={item.name} major={item.major} email={item.email} web={item.web} mobile={item.mobile} />
        ))}
        </div>
        <div class="orange_line"></div>
        <div class="container2">
        {this.profile.map(item => (
          <PersonalProfile title={item.title} content={item.content} />
        ))}
        <div class="line"></div>
        {this.experience.map(item => (
          <WorkExperience title={item.title} job1={item.job1} content1={item.content1} job2={item.job2} content2={item.content2} />
        ))}
        <div class="line"></div>
        {this.skills.map(item => (
          <Skills title={item.title} skill1={item.skill1} skill2={item.skill2} skill3={item.skill3} skill4={item.skill4} skill5={item.skill5}
          skill6={item.skill6} skill7={item.skill7} skill8={item.skill8} skill9={item.skill9}
          />
        ))}
        <div class="line"></div>
        {this.education.map(item => (
          <Education title={item.title} school1={item.school1} major1={item.major1} date1={item.date1} gpa1={item.gpa1} school2={item.school2}
          major2={item.major2} date2={item.date2} gpa2={item.gpa2}
          />
        ))}
        </div>
      </div>
    )
  }
}
export default App;
