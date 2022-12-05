import {
    faBed
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reservationHeader.css";
import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const ReservationHeader = ({ type }) => {
    const { user } = useContext(AuthContext);


    return (
        <div className="header">
          <div
            className={
              type === "list" ? "headerContainer listMode" : "headerContainer"
            }
          >
            <div className="headerList">
              <div className="headerListItem active">
                <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
                </Link>
              </div>
              {user &&
                <div className="headerListItem">
                  <Link to='/reservation' style={{ color: "inherit", textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faBed} />
                    <span>My Reservation</span>
                  </Link>
                </div>
              }
            </div>
            {type !== "list" && (
              <>
                <h1 className="headerTitle">
                  My Reservation
                </h1>
                <p className="headerDesc">
                  Hi, <strong>{user.username}</strong>! Good to see you back!
                </p>
              </>
            )}
          </div>
        </div>
      );
};

export default ReservationHeader;
