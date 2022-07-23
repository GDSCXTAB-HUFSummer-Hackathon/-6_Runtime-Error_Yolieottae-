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
            className="img-fluid rounded-start m-2"
            src={recipeData.thumbnail}
            alt="thumbnail"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {recipeData.title}
              <small className="text-muted m-3">{`작성자: ${recipeData.userId}`}</small>
            </h5>
            <div className="card-text">
              <small className="text-muted">
                {`작성일: ${recipeData.uploadTime}`}
              </small>
            </div>
            <div className="card-text row row-cols-auto text-nowrap m-5">
              {content}
            </div>
          </div>
        </div>
      </div>
      <Collapse content={recipeData.content} id={props.id}></Collapse>
    </div>
  );
}
export default SummaryItem;
