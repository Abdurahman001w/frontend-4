import logo from "../assets/i.webp";
import Detective from "./Detective";
function Base() {
  return (
    <div>
      <Detective />
      <img src={logo} alt="111" />
      <h1>Hallo world</h1>
    </div>
  );
}
export default Base;
