import image01 from "../img/home-img.jpg";

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
            src={image01}
            alt="thumbnail"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{recipeData.title}</h5>
            <p className="card-text row text-nowrap">{content}</p>
            <p className="card-text">
              <small className="text-muted">{recipeData.uploadTime}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryItem;
