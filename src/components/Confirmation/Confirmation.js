import { useSelector } from "react-redux";
import './confirmation.css';

const Confirmation = () => {
  const reduxState = useSelector(state => state);
  console.log(JSON.stringify(reduxState));

  return (
    <>
      <div className="confirm-checkmark">&#10003;</div>
      <div className="confirm-message">Please verify your email address, you should have received an email from us already!</div>
    </>
  )
};

export default Confirmation;
