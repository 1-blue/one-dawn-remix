import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster: React.FC<ToasterProps> = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      richColors
      position="top-center"
      closeButton
      {...props}
    />
  );
};

export { Toaster };
