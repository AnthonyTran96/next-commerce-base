'use client';
import ButtonBase from '../button';
import Drawer from '../drawer';
import { useModalContext } from './drawerContex';

const DrawerTest = () => {
  const { openCartModal, closeCartModal, isCartModalOpen } = useModalContext();
  return (
    <>
      <Drawer isOpen={isCartModalOpen} onClose={closeCartModal} direction="right" position="right">
        <div className="p-6">
          <p>Test Drawler cái nhể</p>
          <ButtonBase
            onClick={() => closeCartModal()}
            iconLeft={{
              icon: 'closeCircle',
              className: 'h-6 w-6 ',
              stroke: '#fff',
              fill: '#fff'
            }}
          />
        </div>
      </Drawer>
      <ButtonBase
        onClick={() => {
          openCartModal();
        }}
      >
        Open Drawler
      </ButtonBase>
    </>
  );
};

export default DrawerTest;
