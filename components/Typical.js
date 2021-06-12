
import Typical from "react-typical";
const TypicalComponent = () => {
  return (
    <Typical
      steps={[
        "Fullstack Dev 🚀",
        2000,
        "JavaScript Dev 🤟",
        2000,
        "Frontend Dev 👦",
        2000,
        "Backend Dev 🧐",
        2000,
        "ReactJS Dev ⚡️",
        2000,
      ]}
      loop={Infinity}
      wrapper="p"
      className="inline-block"
    />
  );
};

export default TypicalComponent;
