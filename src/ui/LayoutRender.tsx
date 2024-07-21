const LayoutRender = () => (
  <div
    style={{
      width: "300px",
      height: "200px",
      border: "1px solid black",
      margin: "1rem 0",
      display: "grid",
      gridTemplateColumns: "repeat(4, auto)",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "space-evenly",
    }}
  >
    {Array.from(Array(8), (_, i) => (
      <div
        style={{
          width: "50px",
          height: "60px",
          border: "1px solid silver",
          backgroundColor: "gainsboro",
        }}
        key={i}
      ></div>
    ))}
  </div>
);

export default LayoutRender;
