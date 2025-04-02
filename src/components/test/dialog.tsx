'use client';
import ButtonBase from '../button';
import Dialog from '../dialog';
import { useDialogContext } from './dialogContext';

const DialogTest = () => {
  const { isDialogOpen, openDialog, closeDialog } = useDialogContext();
  return (
    <>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <div className="p-6">
          <p>Test Dialog cái nhể</p>
          <ButtonBase
            onClick={() => closeDialog()}
            iconLeft={{
              icon: 'closeCircle',
              className: 'h-6 w-6 ',
              stroke: '#fff',
              fill: '#fff'
            }}
          />
        </div>
      </Dialog>
      <ButtonBase
        onClick={() => {
          openDialog();
        }}
      >
        Open Dialog
      </ButtonBase>
    </>
  );
};

export default DialogTest;
