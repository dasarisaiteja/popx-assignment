function Profile() {
  const user =
    JSON.parse(localStorage.getItem("user")) ||
    {};

  return (
    <div className="wrapper">
      <div className="mobile-container">
        <h2 className="profile-title">
          Account Settings
        </h2>

        <div className="profile-card">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h3>
              {user.fullName || "Marry Doe"}
            </h3>

            <p>
              {user.email ||
                "marry@example.com"}
            </p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat.
        </p>
      </div>
    </div>
  );
}

export default Profile;