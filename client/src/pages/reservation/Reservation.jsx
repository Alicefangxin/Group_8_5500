import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import ReservationHeader from "../../components/reservationHeader/reservationHeader";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./Reservation.css";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Reservation = () => {
    // const { user } = useContext(AuthContext);
    // console.log(user._id);
    const user = {
      "_id": "62fb0265e543089d3a8de392"
    };
    const { data, loading, error } = useFetch(`/users/${user._id}`);
    const [reservations, setReservations] = useState([]);


    useEffect(() => {
        setReservations(data.reservations);
    }, [data.reservations]);
    console.log("userinf", reservations);


    return (
        <div>
            <Navbar />
            <ReservationHeader />
            <div className="reservationContainer">
                <h1 className="reservationTitle">{(reservations && reservations.length) ? ("Your Upcoming Trips") : ("You have no coming trips. Start your journey by making a reservation :)")}</h1>
                {
                    reservations && reservations.map((item) => (

                        <div className="searchItem">
                            <img
                                src={item.reservation.hotelPhoto ? item.reservation.hotelPhoto : "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"}
                                alt=""
                                className="siImg"
                            />
                            <div className="siDesc">
                                <h1 className="siTitle">{item.reservation.hotelName}</h1>
                                <span className="siTaxiOp">Free Cancellation</span>
                                <span className="siSubtitle">
                                    Room Info : <b>{item.reservation.roomNum.map(num => (
                                        <b> {num} </b>
                                    ))}</b>
                                </span>
                                <span className="siFeatures">{item.desc}</span>
                                <span className="siCancelOp">Travel Period </span>
                                <span className="siCancelOpSubtitle">
                                    Start Date: {item.reservation.dateStart.slice(0, 10)}
                                </span>
                                <span className="siCancelOpSubtitle">
                                    End Date: {item.reservation.dateEnd.slice(0, 10)}
                                </span>
                            </div>
                            <div className="siDetails">
                                <div className="siDetailTexts">
                                    <span className="siTaxOp">Please call for cancellation</span>
                                    <OverlayTrigger trigger="click" placement="right" overlay={
                                        <Popover id="popover-basic">
                                            <Popover.Header as="h3">Hotel Info</Popover.Header>
                                            <Popover.Body>
                                                <div>Location : {item.reservation.location}</div>
                                                <div>City : {item.reservation.city}</div>
                                            </Popover.Body>
                                        </Popover>
                                    }>
                                        <Button variant="success">Details</Button>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>


                    ))
                }
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Reservation;