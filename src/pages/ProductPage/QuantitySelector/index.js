import { QuantityContainer, QuantityLabel, QuantitySelect } from "./styled";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      onQuantityChange(newQuantity);
    };
  
    return (
      <QuantityContainer>
        <QuantityLabel>Quantity:</QuantityLabel>
        <QuantitySelect value={quantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </QuantitySelect>
      </QuantityContainer>
    );
  };
  
  export default QuantitySelector;