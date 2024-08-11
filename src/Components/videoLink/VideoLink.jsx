import { useState } from "react";
import Button from "react-bootstrap/Button";

import videoImg from "../../assets/images/videoImage.svg";
import VideoModal from "../modal/VideoModal";

function VideoLink({btnWidth, isCenter}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${btnWidth} `}  style={{justifyContent:isCenter?'center':'',
      display:isCenter?'flex':'block'}}>
        <Button
          style={{
            backgroundColor: "Transparent",
            color: "black",
            border: "none",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          onClick={() => setModalShow(true)}
          className="btnResponsive"
        >
          <img src={videoImg} alt="video image" />
          فيديو تعريفي عن أبواب
        </Button>
      </div>
      <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default VideoLink;
