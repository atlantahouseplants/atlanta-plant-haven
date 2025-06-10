
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useForm } from './FormContext';
import BusinessQuoteForm from './BusinessQuoteForm';
import BulkOrderForm from './BulkOrderForm';
import PlantDoctorForm from './PlantDoctorForm';
import HomeConsultationForm from './HomeConsultationForm';

const FormModal = () => {
  const { isOpen, formType, closeForm } = useForm();

  const getFormTitle = () => {
    switch (formType) {
      case 'business-quote':
        return 'Get Your FREE Business Plant Quote';
      case 'bulk-order':
        return 'Corporate Plant Order Request';
      case 'plant-doctor':
        return 'Book Plant Doctor Visit - $129';
      case 'home-consultation':
        return 'Request Home Consultation';
      default:
        return '';
    }
  };

  const renderForm = () => {
    switch (formType) {
      case 'business-quote':
        return <BusinessQuoteForm />;
      case 'bulk-order':
        return <BulkOrderForm />;
      case 'plant-doctor':
        return <PlantDoctorForm />;
      case 'home-consultation':
        return <HomeConsultationForm />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => closeForm()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {getFormTitle()}
          </DialogTitle>
        </DialogHeader>
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
