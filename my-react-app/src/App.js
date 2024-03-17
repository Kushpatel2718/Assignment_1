import logo from "./logo.svg";
import "./App.css";

import Link from "react";
import { Input } from "postcss";
import Youtube from "./icons/Youtube";
import myImage from "./icons/Image.png";
import myImage1 from "./icons/Image (1).png";
import myImage2 from "./icons/Image (2).png";
import myImage3 from "./icons/Image (3).png";
import myImage4 from "./icons/Image (4).png";
function App() {
  return (
    <>
      <div className="root">
        <div className="headers">
          <img src={myImage2}></img>
          <div className="navigation">
            <div>Toolkit</div>
            <div>Features</div>
            <div>Use cases</div>
            <div>Buy vs paal</div>
            <div>Partners</div>
          </div>
          {/* <img src={myImage3}></img> */}
          <button className="buttons-1">Buy $NYX</button>
        </div>
        <div className="part-1">
          <img className="bg-image"></img>
          <div className="left">
            <div className="head-1">EXPERIENCE NYX CIPHER</div>
            <div className="head-2">
              Your Fully Autonomous<br></br> Al Research Agent
            </div>
            <div className="head-3">
              Experience Nyx Cipher's power: detect scams, access
              <br /> real- time project data, and navigate the crypto
              <br /> landscape with knowledge and precision .
            </div>
            <div>
              <button className="buttons-1">Whitepaper</button>
              <button className="buttons-1">Buy $NYX</button>
            </div>
            <div className="head-3 sub">
              Let Nyx be your guide, deciphering community insights <br></br> to
              lead your crypto journey with clarity .
            </div>
          </div>
          <div className="right">
            <div className="heading-1">Chat</div>
            <div className="img-head">
              <img src={myImage4}></img>
              <div className="message-head">you</div>
            </div>
            <div className="message">
              Hello Nyx <br></br>analyze
              2BeGjx5eYHbGqT2kUZ7K3TvSNGBc65xvorcMqL6kgefQ
            </div>
            <div className="img-head">
              <img src={myImage4}></img>
              <div className="message-head">you</div>
            </div>
            <div className="message">
              Analysis initiated for Solanaconda( SSONDA ) Technical Analysis
              Completed: No potential risks have been found . Social Analysis
              Completed: No potential risks have been found . Select' Monitor to
              keep Solanaconda under radar and be updated if any risks occur .
            </div>
            <div className="img-head">
              <img src={myImage4}></img>
              <div className="message-head">you</div>
            </div>
            <div className="message">
              Analysis initiated for Solanaconda( SSONDA ) Technical Analysis
              Completed: No potential risks have been found . Social Analysis
              Completed: No potential risks have been found . Select' Monitor to
              keep Solanaconda under radar and be updated if any risks occur .
            </div>
            <input placeholder="Message..." className="heading-2"></input>
          </div>
        </div>
        <div className="part-1-1">
          {" "}
          <span className="bottom-left">01</span>
        </div>
        <div className="part-2-1">
          <div className="main">
            <div className="card">
              <Youtube className="icons"></Youtube>
              <div>
                <div className="download">20K+</div>
                <div className="desc">Youtube channels</div>
              </div>
            </div>
            <div className="card">
              <Youtube className="icons"></Youtube>
              <div>
                <div className="download">20K+</div>
                <div className="desc">Youtube channels</div>
              </div>
            </div>
            <div className="card">
              <Youtube className="icons"></Youtube>
              <div>
                <div className="download">20K+</div>
                <div className="desc">Youtube channels</div>
              </div>
            </div>
          </div>
        </div>
        <div className="part-3">
          <div className="head-1">BOT FEATURES</div>
          <div className="head-2">Al Research Agent</div>
          <div className="sub-class">
            <div className="head-3">
              Imagine someone who tirelessly tracks, reads, and analyzes every
              online conversation
            </div>
            <span className="part-1-1">
              {" "}
              <span className="bottom-right">02</span>
            </span>
          </div>
        </div>
        <div className="main-1">
          <div className="card-1">
            <span className="head">~ Tracking</span>
            <div className="desc">
              Nyx, your ultimate AI research assistant, plunges into the dynamic
              world of cryptocurrency. From monitoring community sentiment to
              tracking influencer buzz. With Nyx's sharp detection of scams and
              bots , invest with confidence, knowing you're shielded by the most
              vigilant guardian in the digital realm .
            </div>
            <img src={myImage} className="image"></img>
          </div>
          <div className="card-2">
            <span className="head">~ Daily Report</span>
            <div className="desc">
              Nyx, your ultimate AI research assistant, plunges into the dynamic
              world of cryptocurrency. From monitoring community sentiment to
              tracking influencer buzz. With Nyx's sharp detection of scams and
              bots , invest with confidence, knowing you're shielded by the most
              vigilant guardian in the digital realm .
            </div>
            <img src={myImage1} className="image"></img>
          </div>
        </div>
        <div className="main-1">
          <div className="card-1">
            <span className="head">~ Tracking</span>
            <div className="desc">
              Nyx, your ultimate AI research assistant, plunges into the dynamic
              world of cryptocurrency. From monitoring community sentiment to
              tracking influencer buzz. With Nyx's sharp detection of scams and
              bots , invest with confidence, knowing you're shielded by the most
              vigilant guardian in the digital realm .
            </div>
            <img src={myImage} className="image"></img>
          </div>
          <div className="card-2">
            <span className="head">~ Daily Report</span>
            <div className="desc">
              Nyx, your ultimate AI research assistant, plunges into the dynamic
              world of cryptocurrency. From monitoring community sentiment to
              tracking influencer buzz. With Nyx's sharp detection of scams and
              bots , invest with confidence, knowing you're shielded by the most
              vigilant guardian in the digital realm .
            </div>
            <img src={myImage1} className="image"></img>
          </div>
        </div>
        <div className="main-1">
          <div className="card-1">
            <span className="head">~ Tracking</span>
            <div className="desc">
              Nyx, your ultimate AI research assistant, plunges into the dynamic
              world of cryptocurrency. From monitoring community sentiment to
              tracking influencer buzz. With Nyx's sharp detection of scams and
              bots , invest with confidence, knowing you're shielded by the most
              vigilant guardian in the digital realm .
            </div>
            <img src={myImage} className="image"></img>
          </div>
          <div className="card-2">
            <span className="head">~ Daily Report</span>
            <div className="desc">
              Nyx, your ultimate AI research assistant, plunges into the dynamic
              world of cryptocurrency. From monitoring community sentiment to
              tracking influencer buzz. With Nyx's sharp detection of scams and
              bots , invest with confidence, knowing you're shielded by the most
              vigilant guardian in the digital realm .
            </div>
            <img src={myImage1} className="image"></img>
          </div>
        </div>

        <div className="Part-4">
          <span className="top-right">03</span>
          <div className="head-1">WHY IS IT SO GOOD?</div>
          <div className="head-2">
            NYX Cipher is the only friend<br></br> you need in the
            cryptocurrency space .
          </div>
        </div>
        <div className="main-2">
          <div className="head">Simplifies Data</div>
          <div className="desc">
            Let Nyx be your guide through the labyrinth of crypto complexity.
            From decrypting encrypted data to simplifying intricate whitepapers
            and contracts, Nyx's expertise ensures that even the most complex
            information becomes accessible to all .
          </div>
          <div className="head">Simplifies Data</div>
          <div className="desc">
            Let Nyx be your guide through the labyrinth of crypto complexity.
            From decrypting encrypted data to simplifying intricate whitepapers
            and contracts, Nyx's expertise ensures that even the most complex
            information becomes accessible to all .
          </div>
          <div className="head">Simplifies Data</div>
          <div className="desc">
            Let Nyx be your guide through the labyrinth of crypto complexity.
            From decrypting encrypted data to simplifying intricate whitepapers
            and contracts, Nyx's expertise ensures that even the most complex
            information becomes accessible to all .
          </div>
          <div className="head">Simplifies Data</div>
          <div className="desc">
            Let Nyx be your guide through the labyrinth of crypto complexity.
            From decrypting encrypted data to simplifying intricate whitepapers
            and contracts, Nyx's expertise ensures that even the most complex
            information becomes accessible to all .
          </div>
        </div>
        <div className="part-5">
          <div className="head-1">BOT FEATURES</div>
          <div className="head-2">
            NYX Cipher is the only friend<br></br> you need in the
            cryptocurrency space .
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
