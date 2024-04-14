import classes from './logo.module.css';
import Image from 'next/image';
function Logo() {
  return  <Image src='/images/site/logo.png'
  width={118}
          height={56}/>;
}

export default Logo;
