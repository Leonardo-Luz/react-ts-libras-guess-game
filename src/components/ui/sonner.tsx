import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
			position="top-center"
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
			toastOptions={{
				classNames: {
          success: " group toast-success group-[.toaster]:!border-assertive group-[.toaster]:!bg-assertive group-[.toaster]:!text-white",
          error: " group toast-error group-[.toaster]:!border-destructive group-[.toaster]:!bg-destructive group-[.toaster]:!text-white"
				}
			}}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
