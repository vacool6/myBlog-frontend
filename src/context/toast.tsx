import { useContext, createContext } from "react";
import { useToast } from "@chakra-ui/react";

const ToastContext = createContext<any>({
  successToast: (description: string) => {},
  warningToast: (description: string) => {},
});

export const useToasts = () => useContext(ToastContext);

const ToastProvider = ({ children }: any) => {
  const toast = useToast();

  const successToast = (description: string) => {
    return toast({
      position: "top",
      title: "Success!",
      description,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const warningToast = (description: string) => {
    return toast({
      position: "top",
      title: "OOPS!",
      description,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ToastContext.Provider value={{ successToast, warningToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
