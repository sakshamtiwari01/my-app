import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'

function BasicExample(props) {

  const clicked2=()=>{
    let newtext=text.split(/ \s+ /);
    setText(newtext.join(" "))
    props.showalert("Extra Spaces are removed!","success");
  }

  const clicked=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Text has converted to UpperCase!","success")
  }

  const clicked1=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Text has converted to LowerCase!","success")
  }

  const onchange=(event)=>{
    setText(event.target.value);
  }

  const [text,setText]= useState('Text is entered');


  return (
    <>
    <h1 className={`text-${props.oppmode}`}>{props.heading}</h1>
<div className="mb-3">
  <label htmlfor="exampleFormControlTextarea1" className={`form-label text-${props.oppmode}`}  >TextArea</label>
  <textarea Style={`background-color:${props.mode1};`} className={`form-control text-${props.oppmode}`} bg='green' id="exampleFormControlTextarea1" value={text} onChange={onchange} rows="6"></textarea>
</div>
<Button className="btn mx-1 my-1" onClick={clicked}>Convert Text to Uppercase</Button>
<Button className="btn mx-1 my-1" onClick={clicked1}>Convert Text to Lowercase</Button>
<Button className="btn mx-1 my-1" onClick={clicked2}>Remove Extra Spaces</Button>

  <div className="container my-3">

  <h1 className={`text-${props.oppmode}`}>Your Text Summary</h1>
  <p className={`text-${props.oppmode}`}> {text.split(" ").length} Words and {text.length} Characters</p>
  <p className={`text-${props.oppmode}`}>{0.008*text.split(" ").length} Minutes</p>
  </div>
    
    </>
  );
}
export default BasicExample;