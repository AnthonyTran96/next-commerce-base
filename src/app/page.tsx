import ButtonBase from '@/components/button';
import Icon from '@/components/icon';
import I18nMessage from '@/components/locales/i18-text';
import DialogTest from '@/components/test/dialog';
import { DialogProvider } from '@/components/test/dialogContext';
import DrawerTest from '@/components/test/drawer';
import { ModalProvider } from '@/components/test/drawerContex';
import TestDropDown from '@/components/test/dropDown';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextCommerce | Nextjs E-commerce template',
  description: 'This is Home for NextCommerce Template'
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className=" flex flex-col gap-2">
        <h4>Button Base</h4>
        <div className="flex items-center gap-2">
          <ButtonBase iconLeft={{ icon: 'lockedCart', stroke: '#fff' }}>Thêm vào giỏ</ButtonBase>
          <ButtonBase variant="secondary" iconLeft={{ icon: 'lockedCart', stroke: '#000' }}>
            Thêm vào giỏ
          </ButtonBase>
          <ButtonBase variant="ghost">Thêm vào giỏ</ButtonBase>
          <ButtonBase isLoading variant="secondary" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Box đa ngôn ngữ</h4>
        <I18nMessage id="coming-soon" />
      </div>
      <div className="flex flex-col gap-2">
        <h4>Thẻ Icon</h4>
        <div className="flex gap-2">
          <Icon icon="closeCircle" className="h-7 w-7 fill-blue_light-500" />
          <Icon icon="chevronDown" className="h-7 w-7 fill-blue_dark-500" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Dropdown</h4>
        <div className="flex gap-2">
          <TestDropDown />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Drawer</h4>
        <div className="flex gap-2">
          <ModalProvider>
            <DrawerTest />
          </ModalProvider>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Dialog</h4>
        <div className="flex gap-2">
          <DialogProvider>
            <DialogTest />
          </DialogProvider>
        </div>
      </div>
    </div>
  );
}
