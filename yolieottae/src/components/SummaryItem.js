import Collapse from "./Collapse";

function SummaryItem(props) {
  const recipeData = props.recipeData;
  const content = [];
  const tags = Object.keys(recipeData.tags);
  for (let i = 0; i < tags.length; i++) {
    content.push(
      <div className="col" key={i}>
        {`#${tags[i]} `}
      </div>
    );
  }
  return (
    <div className="card mb-3 btn-warning">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={recipeData.thumbnail}
            alt="thumbnail"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{recipeData.title}</h5>
            <div className="card-text row text-nowrap">{content}</div>
            <div className="card-text">
              <small className="text-muted">{recipeData.uploadTime}</small>
            </div>
          </div>
        </div>
      </div>
      <Collapse content={recipeData.content} id={props.id}></Collapse>
    </div>
  );
}
export default SummaryItem;
