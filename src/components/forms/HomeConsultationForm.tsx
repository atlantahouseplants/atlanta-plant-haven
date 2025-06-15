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
  address: z.string().min(5, 'Address is required'),
  homeType: z.string(),
  rooms: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  preferences: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const HomeConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { closeForm } = useForm();

  const form = useReactHookForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homeType: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        formType: 'home-consultation',
        timestamp: new Date().toISOString(),
        leadData: {
          ...data,
          source: 'homepage',
          service: 'Home Plant Design Consultation - $199'
        }
      };

      // UPDATED WEBHOOK URL BELOW — each form now uses its own webhook for simplicity
      await fetch('https://hook.us1.make.com/9u6ioagtg3tylstg85kf2l1lsci491pf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Consultation Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your $199 home consultation.",
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
          name="homeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home Type *</FormLabel>
              <FormControl>
                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select home type</option>
                  <option value="house">Single Family House</option>
                  <option value="condo">Condo/Townhome</option>
                  <option value="apartment">Apartment</option>
                  <option value="loft">Loft</option>
                  <option value="other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rooms/Spaces to Design</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Living room, kitchen, bedroom, patio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Range</FormLabel>
                <FormControl>
                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select budget</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Timeline</FormLabel>
                <FormControl>
                  <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Design Preferences & Requirements</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your style preferences, lighting conditions, pet considerations, plant experience level, or any specific requirements..."
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Request Consultation - $199'}
        </Button>
        
        <p className="text-sm text-center text-muted-foreground">
          ✓ $199 consultation fee credited back with installation • ✓ Custom plant selection
        </p>
      </form>
    </Form>
  );
};

export default HomeConsultationForm;
