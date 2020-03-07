import React from 'react';

import withWhatsNew from './withWhatsNew';
import './WhatsNew.scss';

const WhatsNew = () => (
  <div id="whats-new" className="screen"/>
);

export default withWhatsNew(WhatsNew);
