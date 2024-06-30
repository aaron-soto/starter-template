'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';
import { Form, FormField } from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

const NewsletterSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: 'You have successfully subscribed to our newsletter!',
      description: (
        <p>
          You will receive the latest news, updates, and special offers
          delivered directly to your inbox.
        </p>
      ),
    });
    // reset form after submission
    form.reset();
    setIsLoading(false);
  }

  return (
    <div className="container my-16">
      <div className="py-8 bg-secondary p-4 rounded">
        <h2 className="font-bold text-2xl mb-2">Subscribe to our Newsletter</h2>
        <p className="mb-4">
          Subscribe to our newsletter to get the latest news, updates, and
          special offers delivered directly to your inbox.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring focus:ring-primary"
                    {...field}
                  />
                )}
              />
              <Button type="submit" className="" disabled={isLoading}>
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewsletterSection;
