function Scroller({ props, index }) {
  if (props.length === 1) return;
  return (
    <div className={index % 2 === 0 ? "scroller" : "scroller"}>
      <div className="marquee">
        <ul className="tag-list scroller__inner">
          {props.map((prop, index) => (
            <li key={index}>{prop}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Scroller;
