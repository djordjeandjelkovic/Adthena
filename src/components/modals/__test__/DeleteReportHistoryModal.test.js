import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteReportHistoryModal from '../DeleteReportHistoryModal';

describe("<DeleteReportHistoryModal /> test cases", () => {
  const open = true;
  const setOpen = jest.fn();
  const title = 'Action modal title';
  const confirmAction = jest.fn();

  test('confirm button click without confirmation', () => {
    const { getByTestId } = render(<DeleteReportHistoryModal
        open={open}
        setOpen={setOpen}
        title={title}
        confirmAction={confirmAction} />);

    getByTestId('confirm-button').click();
    expect(confirmAction).toBeCalledTimes(0);
  });

  test('confirm button click with confirmation', () => {    
    const { getByTestId } = render(<DeleteReportHistoryModal
        open={open}
        setOpen={setOpen}
        title={title}
        confirmAction={confirmAction} />);

    const input = getByTestId('confirm-action');
    fireEvent.change(input, { target: { value: 'Delete' } })

    expect(input).toHaveValue('Delete');

    getByTestId('confirm-button').click();
    expect(confirmAction).toBeCalledTimes(1);
  });
});
