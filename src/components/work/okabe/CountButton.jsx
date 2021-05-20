import React from "react";

export const CountButton = (props) => {
  const { TopView } = props;
  this.state = TopView.id;
  const { id } = this.state;

  return (
    <div>
      <p>テンプレート: {id}</p>
      <button onClick={this.onPlusClick}>+</button>
      <button onClick={this.onMinusClick}>-</button>
      <button onClick={this.onPlus10Click}>+10</button>
      <button onClick={this.onMinus10Click}>-10</button>
    </div>
  );
};

onPlusClick = () => {
  const { id } = this.state;
  this.setState({ id: id + 1 });
};
onMinusClick = () => {
  const { id } = this.state;
  this.setState({ id: id - 1 });
};
