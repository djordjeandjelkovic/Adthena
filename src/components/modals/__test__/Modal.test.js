import React from 'react';
import ReactDom from 'react-dom';
import Modal from '../Modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const open = true;
  const setOpen = () => {};

  ReactDom.render(<Modal open={open} setOpen={setOpen}>content</Modal>, div);
  ReactDom.unmountComponentAtNode(div);
});
