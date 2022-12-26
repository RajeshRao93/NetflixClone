import "./login.css";
import logo from "../../assets/images/netflix-logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login-form-container">
        <div className="login-form-layout">
          <Form className="login-form">
            <p>
              <b>Sign In</b>
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="login-input"
                type="email"
                placeholder="Email or phone number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="login-input"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="login-input login-button"
              variant="primary"
              type="submit"
            >
              Sign In
            </Button>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="login-check"
                type="checkbox"
                label="Remember me"
              />
            </Form.Group>
            <p className="login-message">
              New to Netflix? <b>Sign up now.</b> <br /> <br />
              This page is protected by Google reCAPTCHA to <br />
              ensure you're not a bot. 
            </p>
          </Form>
        </div>
        <div className="login-footer">
          <p className="login-footer-data">Questions? Call 0800-000-7969</p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td className="login-footer-data">FAQ</td>
                <td className="login-footer-data">Cancel Membership</td>
                <td className="login-footer-data">Help Center</td>
                <td className="login-footer-data">Terms of Use</td>
              </tr>
              <tr>
                <td className="login-footer-data">Privacy</td>
                <td className="login-footer-data">Cookie Preference</td>
                <td className="login-footer-data">Impressum</td>
                <td className="login-footer-data">Impressum</td>
              </tr>
            </tbody>
          </Table>
          <select className="login-footer-dropdown">
            <option value="English">English</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;
