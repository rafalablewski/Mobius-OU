import { Link } from 'react-router-dom';

const VARIANT_CLASS = {
  primary: 'ht-btn',
  ink: 'ht-btn style-2',
  ghost: 'ht-btn border-btn',
  pill: 'ht-btn radius-btn',
};

export default function CTA({ label, to, variant = 'primary', className = '' }) {
  const base = VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary;
  const classes = className ? `${base} ${className}` : base;
  const external = typeof to === 'string' && /^(https?:|mailto:|tel:)/.test(to);
  if (external) {
    return <a className={classes} href={to}>{label}</a>;
  }
  return <Link className={classes} to={to}>{label}</Link>;
}
