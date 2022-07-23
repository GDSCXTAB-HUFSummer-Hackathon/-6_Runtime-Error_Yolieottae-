import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

function Collapse(props) {
  return (
    <div className="d-flex flex-column">
      <Button color="warning" id={`toggle${props.id}`}>
        레시피 펼치기/접기
      </Button>
      <UncontrolledCollapse toggler={`toggle${props.id}`} className="m-0 p-0">
        <Card>
          <CardBody>{props.content}</CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default Collapse;
