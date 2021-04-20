import React, { useCallback, useState } from 'react';
import {
  Content,
  Heading,
  Task
} from '@components/styled-components/Task';
import DataLoadingModal from '@components/modals/DataLoadingModal';
import DeleteFilesModal from '@components/modals/DeleteFilesModal';
import DeleteReportHistoryModal from '@components/modals/DeleteReportHistoryModal';

const TaskTwo = () => {
  const [openDataLoadingModal, setOpenDataLoadingModal] = useState(false);
  const [openDeleteFilesModal, setOpenDeleteFilesModal] = useState(false);
  const [openReportHistoryModal, setOpenReportHistoryModal] = useState(false);

  const deleteFilesAction = useCallback(() => {
    console.log('Deleting files...');
  }, []);

  const deleteReportAction = useCallback(() => {
    console.log('Deleting report and history...');
  }, []);

  return (
    <>
      <Task>
        <Heading>Task Two</Heading>
        <Content>
          <button type="button" onClick={() => setOpenDataLoadingModal(true)}>
            Open Loading data modal
          </button>

          <button type="button" onClick={() => setOpenDeleteFilesModal(true)}>
            Open Delete files modal
          </button>

          <button type="button" onClick={() => setOpenReportHistoryModal(true)}>
            Open Delete report and history modal
          </button>
        </Content>
      </Task>

      <DataLoadingModal
        open={openDataLoadingModal}
        setOpen={setOpenDataLoadingModal}
      />

      <DeleteFilesModal
        open={openDeleteFilesModal}
        setOpen={setOpenDeleteFilesModal}
        confirmAction={deleteFilesAction}
      />

      <DeleteReportHistoryModal
        open={openReportHistoryModal}
        setOpen={setOpenReportHistoryModal}
        confirmAction={deleteReportAction}
      />
    </>
  );
};

export default TaskTwo;
