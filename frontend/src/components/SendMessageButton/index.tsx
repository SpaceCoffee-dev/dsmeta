import './styles.css'

function SendMessageButton() {
    return (
        <>
            <div className="btn-send">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.14" height="14.14" viewBox="0 0 14.14 14.14">
                    <path id="send-icon" d="M14.131,1.025,12.363,12.489a.883.883,0,0,1-1.214.681L7.764,11.759l-1.4,2.107a.548.548,0,0,1-.481.281.574.574,0,0,1-.574-.574V10.917a.883.883,0,0,1,.186-.542l6-7.716-8.112,7.3L.545,8.776A.887.887,0,0,1,0,7.991a.859.859,0,0,1,.444-.822L12.82.124a.883.883,0,0,1,1.311.9Z" transform="translate(-0.002 -0.007)" fill="#3627d8" />
                </svg>
            </div>
        </>
    )
}

export default SendMessageButton