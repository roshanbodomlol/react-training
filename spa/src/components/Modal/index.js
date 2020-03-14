import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { bool, func, number, string } from 'prop-types';
import { CloseCircleFilled } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';

import Loading from '../Loading';
import './Modal.scss';

const Modal = ({
  active, loading, onClose, timeout, image, content
}) => (
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
                    <Button>Add to Cart</Button>
                  </Row>
                </>
              )
          }
        </div>
        <span
          className="_close"
          role="button"
          tabIndex="-1"
          onClick={onClose}
        >
          <CloseCircleFilled/>
        </span>
      </div>
    </div>
  </CSSTransition>
);

Modal.propTypes = {
  active: bool.isRequired,
  loading: bool.isRequired,
  onClose: func.isRequired,
  image: string.isRequired,
  content: string.isRequired,
  timeout: number
};

Modal.defaultProps = {
  timeout: 200
};

export default Modal;
