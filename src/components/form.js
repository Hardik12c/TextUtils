import React ,{useState} from 'react'

export default function Form(props) {
    const handleonchange=(event)=>{
        SetText(event.target.value);
    }
    const handleUpClick=()=>{
        SetText(text.toUpperCase());
    }
    const handlelowClick=()=>{
        SetText(text.toLowerCase());
    }
    const handcleartext=()=>{
        SetText('');
    } 
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
    }
    const [text, SetText] = useState("");

    return (
        <div>
            <div className="textbox">
                <h2>{props.title}</h2>
                <textarea  id="areafortext" value={text} onChange={handleonchange} placeholder="Enter text here" cols="150" rows="10"></textarea>
                <button className='btn' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn' onClick={handlelowClick}>Convert to Lowercase</button>
                <button className='btn' onClick={handcleartext}>Clear Text</button>
                <button className='btn' onClick={downloadTxtFile}>Download Text</button>
            </div>
            <div className="summary">
                <h1>{props.title2}</h1>
                <p>{(text.split(' ').filter(word => word !== '')).length} words and {text.length} characters</p>
                <h4>Average time to read</h4>
                <span>{0.008*((text.split(' ').filter(word => word !== '')).length)} minutes</span>
            </div>
        </div>
    )
}
Form.defaultProps = {
    title: 'Give me title'
  };