import {
    faBed,
    faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reservationHeader.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ReservationHeader = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
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
