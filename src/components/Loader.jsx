const loader_spin = {
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #2f8d46",
  borderRadius: "50%",
  width: "1.5rem",
  height: "1.5rem",
  margin: "auto",
  animation: "spin 2s linear infinite",
};

const Loader = () => {
  return (
    <>
      <section style={{ display: "block" }}>
        <div style={loader_spin}></div>
      </section>
    </>
  );
};

export default Loader;
