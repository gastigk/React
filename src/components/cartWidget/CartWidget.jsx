import "./CartWidget.css"
import { GiCandleSkull } from "react-icons/gi";

export const CartWidget = () => {
  return (
    <div className="container-cart">
      <GiCandleSkull
        style={{
          fontSize: "4rem",
          color: "#69795e",
        }}
        />
    </div>
  );
};
