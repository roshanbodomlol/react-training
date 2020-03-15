import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  bool,
  func,
  number,
  string,
  any,
  objectOf
} from 'prop-types';
import { CloseCircleFilled } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';

import { hideProductModal } from '../../redux/actions/product.actions';
import { addCartItem, removeCartItem } from '../../redux/actions/cart.actions';
import Loading from '../Loading';
import './Modal.scss';

const mapStateToProps = ({ cart }) => ({ cart });

const Modal = ({
  active, loading, timeout, image, content, dispatch, id, cart
}) => {
  const { items } = cart;
  const itemInCart = items.indexOf(id) > -1;
  return (
    <CSSTransition
      unmountOnExit
      in={active}
      classNames="global-fade"
      timeout={timeout}
      image={image}
      content={content}
    >
      <div id="modal-wrapper">
        <div className="_inner">
          <div className="_body">
            {
              loading
                ? <Loading/>
                : (
                  <>
                    <Row>
                      <Col span={8}>
                        <img src={image} alt=""/>
                      </Col>
                      <Col span={16}>
                        <div dangerouslySetInnerHTML={{ __html: content }}/>
                      </Col>
                    </Row>
                    <Row type="flex" justify="end">
                      {
                        itemInCart
                          ? <Button onClick={() => dispatch(removeCartItem(id))}>Remove from Cart</Button>
                          : <Button onClick={() => dispatch(addCartItem(id))}>Add to Cart</Button>
                      }
                    </Row>
                  </>
                )
            }
          </div>
          <span
            className="_close"
            role="button"
            tabIndex="-1"
            onClick={() => {
              dispatch(hideProductModal());
            }}
          >
            <CloseCircleFilled/>
          </span>
        </div>
      </div>
    </CSSTransition>
  );
};

Modal.propTypes = {
  active: bool.isRequired,
  loading: bool.isRequired,
  image: string.isRequired,
  content: string.isRequired,
  dispatch: func.isRequired,
  id: number.isRequired,
  cart: objectOf(any).isRequired,
  timeout: number
};

Modal.defaultProps = {
  timeout: 200
};

export default connect(mapStateToProps)(Modal);
