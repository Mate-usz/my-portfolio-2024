import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
