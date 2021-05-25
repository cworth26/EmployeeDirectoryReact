import React, { useState } from "react";
// import Container from "../../components/Container";
import Col from "../../components/Col";
// import Row from "../../components/Row";

// const Signup() => {
// const [username, setusername]=usestate('');
//const []
//}
function Signup() {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    password: "",
  });

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form>
        {/* <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                value={signUpData.userName}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, userName: e.target.value })
                }
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {loginState.username}!</h3>
          <p>
            I probably shouldn't tell you this, but your password is{" "}
            {loginState.password}!
          </p>
        </Container> */}
      </form>
    </div>
  );
}

export default Signup;
