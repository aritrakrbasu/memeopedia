import './App.css';
import {useEffect, useState} from 'react'
function App() {

  const [selectedTemplate,setSelectedTemplate] = useState()
  const [captions,setCaptions] = useState([])
  const [memeImage,setMemeImage] = useState()

  useEffect(() => {
    setCaptions([])
    setSelectedTemplate()
    fetch("https://api.imgflip.com/get_memes").then((fetchedData)=>{
      if(fetchedData.ok)
      {
        return fetchedData.json()
      }
    }).then((memeJson)=>{
      var memeData = memeJson.data.memes
      var randomIndex = Math.floor(Math.random()*memeData.length)
      setSelectedTemplate(memeData[randomIndex])
      setMemeImage(memeData[randomIndex].url)
    })
  }, [])

  useEffect(() => {
    if(selectedTemplate && selectedTemplate.box_count)
    {
      setCaptions(new Array(selectedTemplate.box_count).fill(""))
    }
  }, [selectedTemplate ])

  function setCaption(e,index)
  {
    var captionValue = e.target.value || ""
    
    setCaptions(captions.map((caption,captionIndex)=>{
      if(captionIndex === index)
      {
        return captionValue
      }else
      {
        return caption
      }
    }))
  }

  useEffect(() => {

    if(captions.length > 0)
    {
      const params = new FormData();
      params.append("username","aritrabasu71")
      params.append("password","aritrabasu71")
      params.append("template_id",selectedTemplate?.id)

      captions.forEach((caption,index) => {
        params.append(`boxes[${index}][text]`,caption)
      });

      fetch("https://api.imgflip.com/caption_image",{
        method : 'POST',
        body : params
      }).then(res =>{
        if(res.ok)
        {
          return res.json()
        }
      }).then((resJson)=>{
        if(resJson.success)
        {
          setMemeImage(resJson.data.url)
        }
      })
    }
  }, [captions,selectedTemplate?.id])

  function postMeme(e)
  {
    e.preventDefault()
  }

  return (
    <div className="container">
        <div className="row bg-design">
            <div className="col">
                <div className="app-name">
                  Meme<span className="text-theme">Opedia</span>
                </div>
                <div className="app-description">
                  <p>Hey Buddy let's complete <span className="text-theme"> this mission </span> and make her laugh !! 😉</p>
                    <form className="meme-form">
                      {captions && captions.map((caption,key)=>{
                          return (
                            <>
                              <label key={`label-${key}`}>Caption - {key + 1}</label>
                              <input type="text" onChange={(e)=>{setCaption(e,key)}} key={key} />
                            </>
                          )
                      })}

                    {memeImage && (
                        <button className="post-btn" onClick={postMeme}> Post Meme </button>
                    )}
                    </form>
                    
                    

                </div>
            </div>
           <div className="col image-holder">
                {memeImage &&
                    <img src={memeImage} className="meme-template" alt="meme" />
                }
            </div>
        </div>
    </div>
  );
}

export default App;
