import './Button.css'

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  target,
  rel,
  type = 'button',
  ...props 
}) => {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim()

  if (href) {
    return (
      <a 
        href={href}
        className={combinedClass}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

