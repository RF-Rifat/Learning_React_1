interface Props{
    onClose: ()=> void;
}

const Dismiss = ({onClose}: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {" "}
      This will only appear when the button is Clicked.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Dismiss;
