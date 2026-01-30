import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none'
    
    const variantStyles = {
      default: 'bg-primary text-white hover:bg-primary/90',
      outline: 'border border-current text-current hover:bg-current/10'
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
