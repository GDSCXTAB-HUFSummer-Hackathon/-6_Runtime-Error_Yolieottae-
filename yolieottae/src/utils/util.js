export function fomatTagData(tagData) {
  let list = [];
  let count = 0;
  for (let i in tagData.pos) {
    list.push(
      <div
        className="list-group-item list-group-item-action"
        key={i}
      >{`+${tagData.pos[i]} `}</div>
    );
    count++;
  }
  for (let i in tagData.neg) {
    list.push(
      <div
        className="list-group-item list-group-item-action"
        key={i + count}
      >{`-${tagData.neg[i]} `}</div>
    );
  }
  return list;
}
