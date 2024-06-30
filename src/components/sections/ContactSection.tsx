'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';
import SectionHeading from '../style-components/SectionHeading';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: 'Your message has been sent!',
      description: (
        <p>
          We&apos;ll get back to you as soon as possible. Thank you for reaching
          out!
        </p>
      ),
    });
    // reset form after submission
    form.reset();
    setIsLoading(false);
  }

  return (
    <div className="container py-20">
      <SectionHeading
        title="Contact our team"
        description="Got any questions about our platform? We're here to help. Chat to
        us and get those questions answered!"
      />
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem className="col-span-1">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} className="text-sm" />
                  </FormControl>
                  <div className="h-2">
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} className="text-sm" />
                  </FormControl>
                  <div className="h-2">
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      className="text-sm"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-2">
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full p-2 text-sm border border-gray-300 rounded-md bg-background focus:ring-primary focus:border-primary focus:ring-1"
                      placeholder="Type your message here..."
                      {...field}
                    />
                  </FormControl>
                  <div className="h-2">
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <Button className="col-span-2" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactSection;
