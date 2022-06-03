
import BG from '../../images/markingschem.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Submission/sub.css";
import BG1 from '../../images/downMarking.jpg';




function MarkingSchem() {


    const [loading, setLoading] = useState(true);

    const [viewTemplate, setViewTemplate] = useState([
        {
            template: ""
        }
    ]);


    useEffect(() => {
        const fetchUploads = async () => {
            setLoading(true);
            try {
                const result = await axios.get(`http://localhost:5000/api/gettemplate`);
                if (result.status === 200) {
                    setViewTemplate(result.data);
                }
                console.log(" Uploads get ", result);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        };

        fetchUploads();
    }, []);




    return (

        <div className="container border"

            style={{

                marginTop: "50px",

                width: '50%',

                height: '5%',

                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzY82nCUGNhSBWthTthBxGsFuuV-WYdR45Q&usqp=CAU')`,

                backgroundPosition: 'center',

                backgroundSize: 'cover',

            }}>
            <div>

                <br></br>
                <br></br>
                <h1 style={{ color: "red" }}>Notice: marking guide of Research  </h1>
                <br></br>
                <h2 style={{ fontSize: '20px' }}>Considering the current situation in the contry. it was decide to revise the marking guide of research 1 as follows:   </h2>

                <br></br>
                <p style={{ marginRight: '600px' }}><b>Instructions</b> </p>

                <img className="d1giphy.gif" src={BG} alt='bg img' style={{ width: "95%", height: "50%", marginTop: "0px", }} />

                <br></br>
                <br></br>
                <h3 style={{ marginRight: '400px', fontSize: '15px', color: 'blue' }}>Research Template Download Here </h3>




                {viewTemplate.map((template) => (
                    <button style={{ width: "20%", height: "5%", border: "none", marginRight: '640px' }}><img src={BG1} alt='bg img' style={{ width: "70%", height: "90%", marginTop: "0px", marginRight: "0px" }} onClick={() => {
                        window.open(template.file)
                    }} /></button>
                ))}



            </div>
        </div>
    );

}

export default MarkingSchem;