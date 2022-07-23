import SummaryItem from "./SummaryItem";

function SummaryList(props) {
  const content = [];
  for (let i = 0; i < props.recipesData.length; i++) {
    content.push(
      <SummaryItem key={i} recipeData={props.recipesData[i]}></SummaryItem>
    );
  }
  return <div className="row">{content}</div>;
}

export default SummaryList;
