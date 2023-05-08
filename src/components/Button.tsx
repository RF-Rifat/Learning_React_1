interface Props {
    children: string;
    onClick: ()=> void;
    color: string;
}
const CustomBtn = ({children, onClick, color}: Props) => {
  return (
    <div className={`btn btn-`+ color} onClick={onClick}>{children}</div>
  )
}

export default CustomBtn;