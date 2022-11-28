import React from 'react'
// import ScriptTag from "./react-script-tag"
import "./module.css"
import logo from "./LOGO.png"


export default function Modules() {

  return (
    <div>
{/* <ScriptTag isHydrating={true} type="text/javascript" src="C:\Users\hp\Desktop\dropdown\box.js" /> */}
<>

  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title />
  <link rel="stylesheet" type="text/css" href="box.css" />
  <div className="container">
    <div className="book-wrapper">
      <div className="book-cover">
        <img
          src="https://github.com/slyka85/assets/blob/master/bookcover2.png?raw=true"
          alt=""
        />
      </div>
      <div className="pages-container">
        <div className="pages">
          <div className="page-num-1">
            <div className="pages-content">
              <div className="pages-background" />
              <div className="content-inner">
                <h1>Chapter 1</h1>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas ea non vitae a assumenda sint quod, dolores
                    laboriosam velit corrupti nobis cupiditate perspiciatis
                    natus exercitationem, architecto esse ratione blanditiis!
                    Itaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-num-2">
            <div className="pages-content">
              <div className="content-inner">
                <h1>Chapter 2</h1>
                <div className="text">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos, cumque autem! Magni eligendi qui officiis? Fugit iste
                    voluptatum atque voluptatibus totam! Nisi accusantium saepe
                    hic. Aut nobis nesciunt mollitia error.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam odio modi, hic ratione fugit quod natus, excepturi
                    quae minus voluptatum cupiditate quia magnam eveniet ex,
                    reiciendis voluptates ipsam iste laudantium!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati deserunt magnam, at perspiciatis aut. Voluptatem
                    consequuntur neque quisquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-num-3">
            <div className="pages-content">
              <div className="content-inner">
                <h1>Chapter 3</h1>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate voluptas molestiae tempore amet adipisci dicta
                    incidunt nisi alias distinctio fugit blanditiis dignissimos
                    nobis deserunt eum consequuntur ipsam, perspiciatis numquam
                    repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus in odio deserunt est hic minima inventore,
                    mollitia, officia aspernatur eaque voluptatibus? Amet,
                    molestias adipisci delectus ea eligendi sit numquam illo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-num-4">
            <div className="pages-content">
              <div className="content-inner">
                <h1>The End</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
