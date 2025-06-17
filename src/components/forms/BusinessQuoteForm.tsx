
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
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  location: z.string().min(5, 'Office location is required'),
  squareFootage: z.string().optional(),
  hasCurrentPlants: z.string(),
  servicesNeeded: z.string(),
  preferredContact: z.string(),
  requirements: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const BusinessQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { closeForm } = useForm();

  const form = useReactHookForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasCurrentPlants: '',
      servicesNeeded: '',
      preferredContact: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        formType: 'business-quote',
        timestamp: new Date().toISOString(),
        leadData: {
          ...data,
          source: 'homepage',
          service: 'Office Plant Design & Care'
        }
      };

      const response = await fetch('https://hook.us1.make.com/crj4finfx3ubm8o2u7q4n4npa265tmrs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours with your free quote and consultation details.",
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
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@company.com" {...field} />
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Office Location *</FormLabel>
              <FormControl>
                <Input placeholder="Street Address, City, State, ZIP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="squareFootage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Approximate Office Square Footage</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2,500 sq ft" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hasCurrentPlants"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you currently have office plants? *</FormLabel>
              <FormControl>
                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select an option</option>
                  <option value="yes">Yes, we have plants</option>
                  <option value="no">No, starting fresh</option>
                  <option value="some">Some, but need more</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="servicesNeeded"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Services Needed *</FormLabel>
              <FormControl>
                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select services</option>
                  <option value="design-only">Plant Design Only</option>
                  <option value="care-only">Plant Care Only</option>
                  <option value="design-and-care">Design + Ongoing Care</option>
                  <option value="consultation">Consultation First</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Contact Time *</FormLabel>
              <FormControl>
                <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select time preference</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-7pm)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Requirements or Questions</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your space, lighting, preferences, or any specific needs..."
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
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Get My FREE Quote'}
        </Button>
        
        <p className="text-sm text-center text-muted-foreground">
          ✓ 24-hour response • ✓ Free on-site consultation • ✓ 100% plant guarantee
        </p>
      </form>
    </Form>
  );
};

export default BusinessQuoteForm;
