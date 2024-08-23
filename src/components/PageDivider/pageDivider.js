import "./pageDivider.css";

const PageDivider = ({ color1, color2,style }) => {
  return (
    <div className="pageDivider" style={style}>
      <div className="color1" style={{ backgroundColor: color1 ? color1 : 'transparent'}}></div>
      <div className="color2" style={{ backgroundColor: color2 ? color2 : 'transparent' }}></div>
    </div>
  );
};

export default PageDivider;
