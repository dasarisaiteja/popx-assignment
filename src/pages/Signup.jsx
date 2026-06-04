import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createAccount = () => {
    localStorage.setItem(
      "user",
      JSON.stringify(form)
    );

    navigate("/profile");
  };

  return (
    <div className="wrapper">
      <div className="mobile-container">
        <h1>Create your PopX account</h1>

        <div className="input-group">
          <label>Full Name*</label>
          <input
            name="fullName"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Phone Number*</label>
          <input
            name="phone"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email Address*</label>
          <input
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Company Name</label>
          <input
            name="company"
            onChange={handleChange}
          />
        </div>

        <p>Are you an Agency?</p>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={form.agency === "Yes"}
              onChange={(e) =>
                setForm({
                  ...form,
                  agency: e.target.value,
                })
              }
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              value="No"
              checked={form.agency === "No"}
              onChange={(e) =>
                setForm({
                  ...form,
                  agency: e.target.value,
                })
              }
            />
            No
          </label>
        </div>

        <button
          className="primary-btn signup-btn"
          onClick={createAccount}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;