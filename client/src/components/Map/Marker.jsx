import React from 'react'

const Marker = (props) => {
    return (
        <>
            {props.safety === "danger" ? (
                <>
                    <div className="pin pin--danger"></div>
                    <div className="pulse pulse--danger"></div>
                </>
            ) : props.safety === "risk" ? (
                <>
                    <div className="pin pin--risk"></div>
                    <div className="pulse pulse--risk"></div>
                </>
            ) : props.safety === "safe" ? (
                <>
                    <div className="pin pin--safe"></div>
                    <div className="pulse pulse--safe"></div>
                </>
            ) : (
                <>
                    <div className="pin"></div>
                    <div className="pulse"></div>
                </>
            )}
            {/* <div className="pin"></div>
            <div className="pulse"></div> */}
        </>
    )
}

export default Marker;