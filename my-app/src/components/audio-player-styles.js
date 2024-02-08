import styled from "styled-components";


export const Bar = styled.div `
display: flex; 
justify-content: center; 
align-items: center;
max-width: 1920px;
box-sizing: border-box;
position: fixed;
bottom: 0;
left: 50%;
right: 50%;
width: 100%;
transform: translate(-50%, 0%);

`;

export const BarContent = styled.div `
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
max-width: 100%;
    min-width: 100%;
`;

export const BarPlayerProgress = styled.div `
position: relative;
width: 100%;
height: 8px;
background: #2e2e2e;
cursor: pointer;
`;
export const BarPlayerProgressLoad = styled.div`
  position: absolute;
  top: 1px;
  left: 0;
  height: 8px;
  background: #b672ff;
`;

export const BarPlayerBlock = styled.div `
height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`;

export const BarPlayer = styled.div `
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`;

export const BarVolumeBlock = styled.div `
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;
`;

export const PlayerControls = styled.div `
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`;

export const PlayerBtnPrev = styled.div `
padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    margin-right: 23px;
`;

export const PlayerBtnPrevSvg = styled.svg `
width: 15px;
height: 14px;
`;

export const PlayerBtnPlay = styled.div `
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
cursor: pointer;
margin-right: 23px;
cursor: pointer;
`;

export const PlayerBtnPlaySvg = styled.svg `
width: 22px;
height: 20px;
fill: #d9d9d9;
`;

export const PlayerBtnNext = styled.div `
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
cursor: pointer;
margin-right: 28px;
fill: #a53939;
`;

export const PlayerBtnNextSvg = styled.svg `
width: 15px;
height: 14px;
fill: inherit;
stroke: #d9d9d9;
`;
export const PlayerBtnRepeat = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
cursor: pointer;
margin-right: 24px;
`;

export const PlayerBtnRepeatSvg = styled.svg`
width: 18px;
height: 12px;
fill: transparent;
stroke: ${(props) => (props.$isLooped ? "#fff" : "#696969")};
  &:hover {
    stroke: ${(props) => (props.$isLooped ? "#fff" : "#acacac")};
  }
  &:active {
    stroke: #fff;
  }
`;

export const PlayerBtnShuffle = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
cursor: pointer;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;

export const PlayerBtnShuffleSvg = styled.svg`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
&:hover {
  stroke: #acacac;
}
`;

export const PlayerTrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
`;

export const TrackPlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;

export const TrackTime = styled.div`
  color: #696969;
  margin-bottom: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  `;

export const TrackPlayImage = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 12px;
-ms-grid-row: 1;
-ms-grid-row-span: 2;
-ms-grid-column: 1;
grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`;

export const TrackPlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #ffffff;
`;

export const TrackPlayLikeDis = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 26%;
`;
export const TrackPlayLike = styled.div`
padding: 5px
cursor: pointer;
`;

export const TrackPlayLikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
`;

export const TrackPlayDis = styled.div`
padding: 5px;
margin-left: 28.5px;
cursor: pointer;
`;

export const TrackPlayDisSvg = styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
`;

export const VolumeContent = styled.div`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
  cursor: pointer;
`;

export const VolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;?
`;

export const VolumeProgress = styled.div`
width: 109px;
  cursor: pointer;
`;

export const VolumeProgressLine = styled.div`
width: 109px;
cursor: pointer;
`;

export const SkeletonAudioPlayer = styled.div`
background-color: #313131;
/* min-width: 170px; */
height: 20px;
animation: changeBackgroundColor 2s infinite;
}

@keyframes changeBackgroundColor {
0% {
  background-color: #313131;
}
50% {
  background-color: #515151;
}
100% {
  background-color: #313131;
}
`;

export const StandartAudioPlayer = styled.audio`
display: none;
`;