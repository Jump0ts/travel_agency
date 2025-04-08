import ContactForm from "@/components/contactForm";

const ContactPage = () => {
	return (
		<div className="flex flex-col items-center min-h-screen mt-20">
			<ContactForm subject="General Contact" />
		</div>
	);
};

export default ContactPage;
