import { useState } from "react";
import { getRecipesData } from "../utils/firebaseConfig";
import { fomatTagData } from "../utils/util";
import Header from "./Header";
import SummaryList from "./SummaryList";

function RecipesSearch() {
  const [recipesData, setRecipesData] = useState(null);
  const [tagData, setTagData] = useState({ pos: [], neg: [] });
  let content = null;

  function onSearchHandler(e) {
    e.preventDefault();
    getRecipesData(
      (dataArr) => {
        console.log(dataArr);
        setRecipesData(dataArr);
      },
      tagData.pos,
      tagData.neg,
      e.target.searchWordInput.value,
      null
    );
  }

  function onAddTagHandler(e) {
    e.preventDefault();

    const newPosTagData = Array.from(tagData.pos);
    const newNegTagData = Array.from(tagData.neg);
    const tagType = e.nativeEvent.submitter.name;
    const newTag = e.target.tagInput.value;

    if (tagType === "posTag") {
      newPosTagData.push(newTag);
    } else if (tagType === "negTag") {
      newNegTagData.push(newTag);
    }

    setTagData({ pos: newPosTagData, neg: newNegTagData });
  }

  if (recipesData != null)
    content = <SummaryList recipesData={recipesData}></SummaryList>;
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <form className="input-group mb-3" onSubmit={onSearchHandler}>
          <input
            className="form-control"
            type="text"
            name="searchWordInput"
            placeholder="어떤 요리 레시피?"
          ></input>
          <input
            className="btn btn-outline-warning"
            type="submit"
            value="검색"
          ></input>
        </form>
        <form className="input-group" onSubmit={onAddTagHandler}>
          <input
            className="form-control"
            type="text"
            name="tagInput"
            placeholder="어떤 태그?"
          ></input>
          <input
            className=" btn btn-outline-warning"
            type="submit"
            value="좋아요"
            name="posTag"
          ></input>
          <input
            className="btn btn-outline-warning"
            type="submit"
            value="싫어요"
            name="negTag"
          ></input>
          <br />
        </form>
        <div className="list-group m-1">{fomatTagData(tagData)}</div>
        {content}
      </div>
    </div>
  );
}

export default RecipesSearch;
