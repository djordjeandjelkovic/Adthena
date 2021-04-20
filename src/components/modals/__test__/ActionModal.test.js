import React from 'react';
import ActionModal from '../ActionModal';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe("<ActionModal /> test cases", () => {
  const open = true;
  const setOpen = jest.fn();
  const title = 'Action modal title';
  const confirmAction = jest.fn();

  test('test with all passed elements', () => {
    const deleteTitle = 'Delete user';
    const confirmButtonText = 'Delete';
    const cancelButtonText = 'Cancel';
    const children = <p>Are you sure you want to delete user?</p>;

    const { getByTestId, container } = render(<ActionModal
        open={open}
        setOpen={setOpen}
        title={deleteTitle}
        confirmAction={confirmAction}
        confirmButtonText={confirmButtonText}
        cancelButtonText={cancelButtonText}>
        {children}
    </ActionModal>);
    
    expect(getByTestId('confirm-button')).toHaveTextContent(confirmButtonText);
    expect(getByTestId('cancel-button')).toHaveTextContent(cancelButtonText);
    expect(getByTestId('title')).toHaveTextContent(deleteTitle);
    expect(container).toContainHTML("<p>Are you sure you want to delete user?</p>");
  });

  test('test default values', () => {
    const title = 'Delete user';    
    const defaultConfirmButtonText = 'Confirm';
    const defaultCancelButtonText = 'Cancel';

    const { getByTestId } = render(<ActionModal
        open={open}
        setOpen={setOpen}
        title={title}
        confirmAction={confirmAction} />);

    expect(getByTestId('confirm-button')).toHaveTextContent(defaultConfirmButtonText);
    expect(getByTestId('cancel-button')).toHaveTextContent(defaultCancelButtonText);
  });

  test('matches snapshot', () => {
    const title = 'Action modal title';
    const confirmButtonText = 'Confirm';
    const cancelButtonText = 'Cancel';

    const tree = renderer.create(<ActionModal
        open={open}
        setOpen={setOpen}
        title={title}
        confirmAction={confirmAction}
        confirmButtonText={confirmButtonText}
        cancelButtonText={cancelButtonText} />
    );

    expect(tree).toMatchSnapshot();
  });

  test('confirm button click', () => {    
    const { getByTestId } = render(<ActionModal
        open={open}
        setOpen={setOpen}
        title={title}
        confirmAction={confirmAction} />);
    getByTestId('confirm-button').click();
    expect(confirmAction).toBeCalledTimes(1);
  });

  test('cancel button click', () => {    
    let modal = render(<ActionModal
        open={open}
        setOpen={setOpen}
        title={title}
        confirmAction={confirmAction} />);

    const { getByTestId } = modal;
    getByTestId('cancel-button').click();
    expect(setOpen).toBeCalledTimes(1);
  });
});
