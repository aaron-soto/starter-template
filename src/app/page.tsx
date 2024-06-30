import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <div className="container py-16">
        <h1 className="font-bold text-5xl mb-4">Welcome to the App</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
          doloribus vel sed, est magnam modi ad maxime aliquam voluptatibus,
          eligendi repellat mollitia optio quos, nam voluptatem eveniet
          necessitatibus corrupti.
        </p>
        <div className="flex space-x-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
