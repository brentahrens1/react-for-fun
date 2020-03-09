import React, { useState } from 'react';
import './App.css';

import NewFast from './images/new-fast.jpg';
import Orare from './images/orare.jpg';
import SnowOcean from './images/snow-ocean.jpg';
import Ludwig from './images/ludwig.jpg';
import AllLives from './images/all-lives.jpg';
import YP from './images/yp.jpeg';
import Cidida from './images/cidida.jpeg';
import Eibol from './images/eibol.jpeg';

const App = () => {
  const [togglePic, setTogglePic] = useState(false)
  const [currentPic, setCurrentPic] = useState("")

  const el = (e) => {
    setTogglePic(true)
    setCurrentPic(e.target.id)
  }

  const clearEl = () => {
    setTogglePic(false)
    setCurrentPic("")
  }

  return (
      <div className="main">
        <div className="main--left">
          <div className="main-btns">
            <p className="main-btns--group">Email</p>
            <p className="main-btns--group">Follow</p>
          </div>
          <h1 className="headline-name">Young Planet</h1>
          <p className="headline-desc">Brent Ahrens is easily the best rapper in the entire world. Member of the legendary Hip Hop duo Young Planet his legacy has already been cemented in the world of music.</p>
          <img className={(togglePic && currentPic==="new-fast") ? "show" : "hide"} src={NewFast} alt="new fast automatic" />
          <img className={(togglePic && currentPic==="orare") ? "show" : "hide"} src={Orare} alt="orare" />
          <img className={(togglePic && currentPic==="snow-ocean") ? "show" : "hide"} src={SnowOcean} alt="snow-ocean" />
          <img className={(togglePic && currentPic==="ludwig") ? "show" : "hide"} src={Ludwig} alt="snow-ocean" />
          <img className={(togglePic && currentPic==="all-lives") ? "show" : "hide"} src={AllLives} alt="snow-ocean" />
          <img className={(togglePic && currentPic==="yp") ? "show" : "hide"} src={YP} alt="snow-ocean" />
          <img className={(togglePic && currentPic==="cidida") ? "show" : "hide"} src={Cidida} alt="snow-ocean" />
          <img className={(togglePic && currentPic==="eibol") ? "show" : "hide"} src={Eibol} alt="snow-ocean" />
          <div className="main-bottom">
            <h1 className="headline-name headline--title" id="cidida" onMouseOver={el} onMouseLeave={clearEl}>Rapper</h1>
            <h1 className="headline-name headline--title" id="yp" onMouseOver={el} onMouseLeave={clearEl}>Writer</h1>
            <h1 className="headline-name headline--title" id="eibol" onMouseOver={el} onMouseLeave={clearEl}>Producer</h1>
          </div>
        </div>
        <div className="main--right">
          <div className="main-btns">
            <p className="main-btns--group">Music</p>
            <p className="main-btns--group">Follow</p>
          </div>
          <h1 className="headline-name album" id="new-fast" onMouseOver={el} onMouseLeave={clearEl}>New Fast Automatic</h1>
          <h1 className="headline-name album" id="snow-ocean" onMouseOver={el} onMouseLeave={clearEl}>Snow Ocean</h1>
          <h1 className="headline-name album" id="orare" onMouseOver={el} onMouseLeave={clearEl}>Orare</h1>
          <h1 className="headline-name album" id="ludwig" onMouseOver={el} onMouseLeave={clearEl}>Ludwig, Can You Hear Me?</h1>
          <h1 className="headline-name album" id="all-lives" onMouseOver={el} onMouseLeave={clearEl}>All Our Lives, Dreaming</h1>
          <h1 className="headline-content-right">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced</h1>
        </div>
      </div>
    );
}

export default App;
