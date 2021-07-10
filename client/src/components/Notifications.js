import React, {useContext, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {SocketContext} from "../SocketContext"

const Notifications = () => {
    const {call, callAccepted, answerCall} = useContext(SocketContext);
    // useEffect(() => {
    //     console.log(call);
    // }, [])
    // const buttonClicked = () => {
    //     console.log(call);
    //     answerCall();
    // }
    return (
        <>
            {call.isReceivedCall && !callAccepted && (
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h1>{call.name} is calling:  </h1>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={answerCall}
                    >
                        Answer
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notifications
