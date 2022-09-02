import './Card_time.css';
import { useState, useEffect } from 'react';
import axios from "axios"

function Card_time() {

    const [time, settime] = useState();
    useEffect(() => {
      axios.get(` http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017`).then(function (result) {
        console.log(result?.data?.data[0].timings.Asr)
        settime(result?.data?.data[0].timings);
      });
    }, [])

    return (
        <>
            <div className="container-time">
                <div className="card c-time">
                    <div className='date'>
                        <h2>04:53 PM</h2>
                        <h5>Wednesday, 30th Ramadhan 2022</h5>
                    </div>
                    <div className="date">
                        <h6>Next Prayer</h6>
                        <p className='next-salet'>06:39 PM <br />
                            1h 46min left until Maghrib</p>
                    </div>
                    <div className='date-salet'>
                        <p className='und-l'>Fajr___________________________{time?.Fajr}</p>
                        <p className='und-l'>Sunrise_______________________{time?.Sunrise}</p>
                        <p className='und-l'>Dhuhr________________________{time?.Dhuhr}</p>
                        <p className='und-l asr'>Asr___________________________{time?.Asr}</p>
                        <p className='und-l'>Maghrib______________________{time?.Maghrib}</p>
                        <p className='und-l'>Isha___________________________{time?.Isha}</p> 
                    </div>
                    <img src="/assets/MainBg.svg" className="card-img-Bottom img-MainBg" />
                </div>
            </div>
        </>
    );
}

export default Card_time;
