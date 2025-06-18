
import React, { useState } from 'react'



let MyStyle = {
  color: 'Black',
  fontWeight: '500',

}
let textarea_border = {
  border: '2px solid #767668',
  transition: 'none',
}



export default function TextForm(props) {

  const [text, setText] = useState("");

  const removeExtraSpaces = () => {
    let newText = text;
    while (newText.includes("  ")) {
      newText = newText.replaceAll("  ", " ");
    }
    setText(newText.trim());
    props.showAlert("Extra Spaces Has been Removed!");
  };
  const upperCaser = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

    document.title= 'Converted';

    setInterval(() => {
      document.title= 'CounTills';
    }, 2000);
  }
  const copyToClip = () => {
    navigator.clipboard.writeText(text);
    alert("Copied To Clipboard");

     document.title= 'Copied';

    setInterval(() => {
      document.title= 'CounTills';
    }, 2000);
  }
  const lowerCaser = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);

     document.title= 'Converted';

    setInterval(() => {
      document.title= 'CounTills';
    }, 2000);
  }
  const textClear = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);

     document.title= 'Cleard';

    setInterval(() => {
      document.title= 'CounTills';
    }, 2000);
  }
  const onchanger = (event) => {
    setText(event.target.value);

    
  }


  return (
    <>


      <div className='container my-3'>
        <h1>{props.heading} </h1>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="mb-3 tarea">
              <textarea style={textarea_border} className="form-control bg-light" id="myBox" onChange={onchanger} value={text} placeholder='Enter Your Text Here...' rows="8"></textarea>
            </div>
          </div>
          {/* <div className="col-lg-6 col-sm-10"></div> */}
        </div>

        <button style={MyStyle} className="btn btn-warning m-2" onClick={textClear}>Clear Text</button>

        <button style={MyStyle} className="btn btn-warning m-2" onClick={upperCaser}>Convert to Uppercase</button>
        <button style={MyStyle} className="btn btn-warning m-2" onClick={lowerCaser}>Convert to LoweerCase</button>
        <br />
        <button style={MyStyle} className="btn btn-warning m-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button style={MyStyle} className="btn btn-warning m-2" onClick={copyToClip}>Copy Text</button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <h5>{text.split(" ").filter((element)=>{return element.length!== 0}).length} Words & {text.length} Chracters</h5>
        <h5>{text.split(" ").length * 0.008} Minutes required to read thoese words</h5>
      </div>

    </>

  );


}

