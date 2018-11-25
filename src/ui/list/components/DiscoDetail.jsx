import React from "react";
import styled from "styled-components";
import closeIcon from "../../../assets/images/cross.png";

const Container = styled.div`
  display: flex;
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  padding-right: 30px;
  height: 100%;
`;

const DiscoInfoContainer = styled.div`
  width: 100%;
`;

const ArtistTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  color: #a9a8a8;
`;

const DiscoTitle = styled.div`
  font-weight: 300;
  font-size: 34px;
`;

const Year = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #a9a8a8;
`;

const TracklistContainer = styled.div`
  padding-top: 15px;
`;

const TrackInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DiscoDetail = props => {
  const { disco, artist, closeModal } = props;
  return (
    <Container>
      <CloseIcon src={closeIcon} onClick={() => closeModal()} />
      <Thumbnail src={disco.thumb} />
      <DiscoInfoContainer>
        <ArtistTitle>{artist.label}</ArtistTitle>
        <DiscoTitle>{disco.title}</DiscoTitle>
        <Year>{disco.year}</Year>
        {/*the description as displayed on the design isn't available at discogs api. I decided to get the tracklist instead*/}
        <TracklistContainer>
          {disco.tracklist &&
            disco.tracklist.map((track, index) => (
              <TrackInfo key={index}>
                {/*track number and duration*/}
                <div>
                  {index + 1}. {track.title}
                </div>
                <div>{track.duration}</div>
              </TrackInfo>
            ))}
        </TracklistContainer>
      </DiscoInfoContainer>
    </Container>
  );
};

export default DiscoDetail;
