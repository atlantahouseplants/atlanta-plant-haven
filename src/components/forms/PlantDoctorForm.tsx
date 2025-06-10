
import React, { useState } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useForm } from './FormContext';

const formSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Address is required for house call'),
  plantProblem: z.string().min(10, 'Please describe the plant problem'),
  urgency: z.string(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  additionalServices: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const PlantDoctorForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { closeForm } = useForm();

  const form = useReactHookForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      urgency: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        formType: 'plant-doctor',
        timestamp: new Date().toISOString(),
        leadData: {
          ...data,
          source: 'homepage',
          service: 'Plant Doctor House Call - $129'
        }
      };

      await fetch('https://hook.us1.make.com/0i3sxbwb2i37n6817qgnjlje844q8l7o', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Appointment Request Submitted!",
        description: "Dr. Nick will contact you within 24 hours to schedule your $129 plant doctor visit.",
      });
      
      closeForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "Please try again or call us directly at (770) 123-4567",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(770) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home Address *</FormLabel>
              <FormControl>
                <Input placeholder="Street Address, City, State, ZIP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="plantProblem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Your Plant Problem *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What's wrong with your plants? Include symptoms, how long it's been happening, and any recent changes..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urgency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Urgency Level *</FormLabel>
              <FormControl>
                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select urgency</option>
                  <option value="emergency">Emergency (plant dying)</option>
                  <option value="urgent">Urgent (within 1 week)</option>
                  <option value="normal">Normal (within 2 weeks)</option>
                  <option value="routine">Routine checkup</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Time</FormLabel>
                <FormControl>
                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select time</option>
                    <option value="morning">Morning (9am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-5pm)</option>
                    <option value="evening">Evening (5pm-7pm)</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="additionalServices"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Services Needed</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Repotting, plant selection advice, ongoing care plans, etc..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Book Plant Doctor Visit - $129'}
        </Button>
        
        <p className="text-sm text-center text-muted-foreground">
          ✓ Same-week appointments • ✓ Expert diagnosis • ✓ 90-minute comprehensive visit
        </p>
      </form>
    </Form>
  );
};

export default PlantDoctorForm;
