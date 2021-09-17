import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function step2({ onUpdateValidator }) {
  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);
  const [validator, setValidator] = useState(false);
  const [select, setSelected] = useState(false)

  function highlightOnClick(e) {
    //setSelected(select = !select)
    e.style.backgroundColor = "#333"
  }

  function unsetCategory(e) {
    document.getElementsByClassName("category")[e - 1].style.backgroundColor = "#DADADA";
  }

  useEffect(()=>{
    //document.getElementsByClassName("category")[0].onclick =  highlightOnClick;
    let a = null;

    let category = document.getElementsByClassName("category");

    let c1, c2, c3, c4, c5, c6, c7, c8;

    c1 = category[0];
    c2 = category[1];
    c3 = category[2];
    c4 = category[3];
    c5 = category[4];
    c6 = category[5];
    c7 = category[6];
    c8 = category[7];

    c1.onclick = function() {
      highlightOnClick(c1)
      if(a != 1 && a != null) {
        unsetCategory(a);
      }
      a = 1
      setValidator(true)
    };
    
    c2.onclick = function() { 
      highlightOnClick(c2);
      if(a != 2 && a != null) {
        unsetCategory(a);
      }
      a = 2;
      setValidator(true)

    };

    c3.onclick = function() { 
      highlightOnClick(c3)
      if(a != 3 && a != null) {
        unsetCategory(a);
      }
      a = 3;
      setValidator(true)

    };

    c4.onclick = function() { 
      highlightOnClick(c4)
      if(a != 4 && a != null) {
        unsetCategory(a);
      }
      a = 4;
      setValidator(true)

    };

    c5.onclick = function() { 
      highlightOnClick(c5)
      if(a != 5 && a != null) {
        unsetCategory(a);
      }
      a = 5;
      setValidator(true)


    };

    c6.onclick = function() { 
      highlightOnClick(c6)
      if(a != 6 && a != null) {
        unsetCategory(a);
      }
      a = 6;
      setValidator(true)

    };

    c7.onclick = function() { 
      highlightOnClick(c7)
      if(a != 7 && a != null) {
        unsetCategory(a);
      }
      a = 7;

      setValidator(true)

    };

    c8.onclick = function() { 
      highlightOnClick(c8)
      if(a != 8 && a != null) {
        unsetCategory(a);
      }
      a = 8;
      setValidator(true)

    };

   
    
  }, [])

  useEffect(() => {
    if (value === null) {
      return;
    }
    if (value === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value]);

  useEffect(() => {
    if (value === null) {
      setValidator(false);
    }
    if (value === null) {
      setValidator(false);
    } else {
      setValidator(true);
    }
  }, [value]);

  useEffect(() => {
    onUpdateValidator(validator);
  }, [validator]);


  



  return (
    <div  class="flex-container">
      <h1 className="step2">Choose category</h1>
      <>
        <div className="categories">
          <Button
          id="category1"
          className="category"
          isValid
          
          
          >
            Hockey
            </Button>

<Button
className="category"
id="category2"
  
  isValid
>
  Tennis
  </Button>

<Button
className="category"
id="category3"

  
  isValid
>
  Fitness
  </Button>

<Button
className="category"
id="category4"

  
  isValid
>
  Soccer
  </Button>


  <Button
          id="category5"

          className="category"
            
            isValid
          >
          Track
            </Button>

<Button
className="category"
id="category6"
  
  isValid
>
  Skating
  </Button>

<Button
className="category"
id="category7"

  
  isValid
>
  Yoga
  </Button>

<Button
className="category"
id="category8"

  
  isValid
>
  Soccer
  </Button>
        
  </div>
          </>
      
       
      
    </div>
  );
}


