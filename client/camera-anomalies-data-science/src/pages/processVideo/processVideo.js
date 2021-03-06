import React, {Fragment, useEffect, useState} from "react"
import axios from "axios"
import Progress from "../components/Progress"
import Modal from "../components/Modal"
import { navigate } from "gatsby"
import { useSelector } from 'react-redux'
import { sleep } from "../../../../../server-files/helper";
import Layout from "../components/Layout";
import Card from "../components/Card";

const endpointStartProcessing = "process"
const endpointCheckStatus = "checkStatus"
const startProcessingVideoUrl = "http://localhost:33345" 


const ProcessVideo = ({contextId, filePath, setCurrentRoute}) => {

    useEffect(async () => {
        if(!contextId) {
            await sleep(2000)
            setCurrentRoute(4)
            navigate("/myVideos")
        }
    }, [contextId])

    return (
        <Layout>
        {
        contextId ? 
            <Fragment>
                <Card setCurrentRoute={setCurrentRoute} contextId={contextId} filePath={filePath} cardHeader={"Uploaded Video Information"} cardDescription={"Description about the uploaded Video need to process the video and then analyse it."} />
            </Fragment>
        :
        <Fragment>
              <div className="position-absolute top-50 start-50 translate-middle">
                    <h4 className="display-7 text-center mb-4">
                        <i className="fab fa-react"><h2>You have not picked any uploaded video to process</h2></i>
                    </h4>
                    <h4 className="display-7 text-center mb-4">
                        <i className="fab fa-react"><h2>Redirected you to pick a video...</h2></i>
                    </h4>
                </div>
        </Fragment>
        }
        </Layout>
    )

}

export default ProcessVideo