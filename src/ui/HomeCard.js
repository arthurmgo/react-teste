import React from 'react'

const HomeCard = (props) => {

    return (
        <div className={"col-12 col-sm-4"}>
            <div class="card" style={{ width: "20rem" }}>
            
                {/* <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162b752a35a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162b752a35a%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.2%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card cap" /> */}
                <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '5px', width: '100px', heigt: '100px'}} src="https://www.agilecockpit.com/wp-content/uploads/2014/10/Scrum-oranje.png" alt="Card cap" />
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.text}</p>
                    <button class="btn btn-primary" onClick={props.action} >{props.buttonName}</button>
                </div>
            </div>
        </div>
    )
}

export default HomeCard