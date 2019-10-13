import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart } = props;
  const handleDeleteItemFromCart = itemId => {
    props.deleteFromCart(itemId);
  };

  const totalPrice = cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{` $ ${item.price}`}</span>
            </div>
            <i
              role="button"
              className="fas fa-trash-alt"
              onClick={() => handleDeleteItemFromCart(item.id)}
              tabIndex={item.id}
              onKeyUp={() => handleDeleteItemFromCart(item.id)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{`$ ${totalPrice}`}</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
