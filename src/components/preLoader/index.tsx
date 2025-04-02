import Spinner from '../spiner';

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-common-white">
      <Spinner size={48} />
    </div>
  );
};

export default PreLoader;
