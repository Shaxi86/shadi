import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NewFrom() {
  const [formData, setFormData] = useState({
   Newhigh: "",
   Newlow: "",
  });

  const [finalH, setFinalH] = useState("");


  const handleOnChange = (e) => {
    const { name, value } = e.target;
 
    setFormData({
      ...formData,
      [name]: value,
    });
       console.log(formData)

  };


  const handleProcessData = () => {

    const finalData = 70 * parseFloat(formData.Newhigh) + 40 * parseFloat(formData.Newlow);

    setFinalH(finalData);
  };

  return (<>
    <h1 className="text-center">New Test</h1>
    <div className="text-center">
      <Row className="mb-3 mx-1">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>70 קושי גבוהה</Form.Label>
          <Form.Control
            type="text"
            placeholder="קושי גבוהה"
            name='Newhigh'
            value={formData["קושי גבוהה"]}
            onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>40 קושי נמוך</Form.Label>
          <Form.Control
            type="text"
            placeholder="קושי נמוך"
            name='Newlow'
            value={formData["קושי נמוך"]}
            onChange={handleOnChange} 
            />
        </Form.Group>
      </Row>

      <div className="container text-center">
        <div className="row justify-content-evenly">
          <div className="col-3">
            <div>קושי סופי </div>
          </div>
          <div className="col-6">
            <div className="result">{finalH}</div>
          </div>
        </div>
        <br />
        <button  className="btn border border-danger-subtle" onClick={handleProcessData}> Click For Result</button>
      </div>
    </div>
            </>
  );
}

export default NewFrom;