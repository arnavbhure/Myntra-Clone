const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "5rem", height: "5rem", marginTop: "2rem" }}
        ></div>
      </div>
    </>
  );
};

export default LoadingSpinner;
