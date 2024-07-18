import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#FFC531', '#E44848', '#f8b26a', '#475467', '#101828']}
    />
  );
}
