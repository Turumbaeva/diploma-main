import { useContext } from "react";
import { signIn, signOff } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <NavLink to="/orders">
            {user.photoURL ? (
              <img
                className="photoURL"
                src={user.photoURL}
                alt={user.displayName}
              />
            ) : null}
          </NavLink>
          <button className="Sign off" onClick={signOff}>
            Sign out
          </button>
        </span>
      ) : (
        <span>
          <button className="Sign" onClick={signIn}>
            Sign in
          </button>
        </span>
      )}
    </div>
  );
}