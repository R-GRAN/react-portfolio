function Scroller({ props,index }) {
    return (
      <div  className={index % 2 === 0 ? "scroller" : "scroller light-reverse"} >
        <marquee>
          <ul className="tag-list scroller__inner">
            {props.map((prop, index) => (
              <li key={index}>{prop}</li>
            ))}
          </ul>
        </marquee>
      </div>
    );
  }
  
  export default Scroller; 