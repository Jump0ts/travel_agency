import ContactForm from "@/components/contactForm";

const ContactPage = () => {
	return (
		<div className="flex flex-col items-center min-h-screen mt-10 w-full">
			<div className="flex flex-col gap-4 w-9/10 md:w-4/10">
				<ContactForm subject="General Contact" />
			</div>
		</div>
	);
};

export default ContactPage;
