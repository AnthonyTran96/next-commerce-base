'use client';
import { iconMap } from './iconPaths';

export type IconName = keyof typeof iconMap;

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  icon: IconName;
  fill?: string;
  stroke?: string;
}

const Icon: React.FC<IconProps> = ({ icon, ...rest }) => {
  const SvgIcon = iconMap[icon];
  return <SvgIcon {...rest} />;
};

export default Icon;
