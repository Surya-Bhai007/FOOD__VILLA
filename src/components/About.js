import { UserClass } from "./UserClass";
const About = () => {
  const UserData={
    Name:"suraj kumar mourya",
    Location:"Delhi",
    Contact:966731+"****",
  }
  return (<h1>about my self</h1>), (<UserClass {...UserData}/>);
};
export default About;
