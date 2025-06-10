
import React, { createContext, useContext, useState } from 'react';

export type FormType = 'business-quote' | 'bulk-order' | 'plant-doctor' | 'home-consultation';

interface FormContextType {
  isOpen: boolean;
  formType: FormType | null;
  openForm: (type: FormType) => void;
  closeForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<FormType | null>(null);

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setFormType(null);
  };

  return (
    <FormContext.Provider value={{ isOpen, formType, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
