import React, { useState, useEffect } from "react";
import BG1 from '../../images/downMarking.jpg';
import { Table, Button, Input } from "antd";

import axios from "axios";

function ReadAllSubmissionSupervi(props) {

    const [loading, setLoading] = useState(true);

    const [viewSubmission, setViewSubmission] = useState([
        {
            file: ""
        }
    ]);


    useEffect(() => {
        const fetchUploads = async () => {
            setLoading(true);
            try {
                const result = await axios.get(`http://localhost:5000/api/getfile`);
                if (result.status === 200) {
                    setViewSubmission(result.data);
                }
                console.log(" Uploads get ", result);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        };

        fetchUploads();
    }, []);


    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) => index + 1,
        },
    ]

    return (
        <div>
            <h1>Student Submission</h1>


            {viewSubmission.map((template) => (
                <a onClick={() => {
                    window.close(template.file)
                }} />
            ))}


        </div>
    );
}

export default ReadAllSubmissionSupervi;