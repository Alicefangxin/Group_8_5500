

import "./reserve.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../../hooks/useFetch";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Reserve = ({ setOpen, hotelId }) => {

  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data } = useFetch(`/hotels/room/${hotelId}`);
  console.log(`/hotels/find/${hotelId}`);
  const  hotelData = useFetch(`/hotels/find/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const [reservation, setReservation] = useState({})





  useEffect(()=>{
    const roomNums = [];
    for (const selectedRoom of selectedRooms) {
      for (const room of data) {
        for (const roomNum of room.roomNumbers) {
          console.log(roomNum._id === selectedRoom);
          if (roomNum._id === selectedRoom) {
            roomNums.push(roomNum.number)
          }
        }
      }
    }

    if (dates) {
      const reservation = {
        "hotelName": hotelData.data.name,
        "hotelPhoto": (hotelData.data.photos ? hotelData.data.photos[0] : "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"),
        "roomNum": roomNums,
        "location": hotelData.data.address,
        "city" : hotelData.data.city,
        "dateStart": dates[0].startDate,
        "dateEnd": dates[0].endDate
      }
      setReservation(reservation)
    }
  }, [hotelData, selectedRooms, dates])


  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());


    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    console.log("room unavailable dates: ", roomNumber.unavailableDates);
    console.log("alldates", alldates);


    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId, i) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });

          // var reserveData = {
          //   hotel_id: hotelData._id,
          //   hotel_name: hotelData.name
          // }

          console.log("reservation", user._id, hotelData);
          
          if (i === 0 && reservation) {
            var reser = axios.put(`/users/reservation/${user._id}`, {
              reservation
            });
          }

          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) { }
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">
                Price: <b>{item.price} USD</b>
              </div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
