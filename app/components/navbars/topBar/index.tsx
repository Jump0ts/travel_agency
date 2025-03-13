import { Button } from "@/app/ui/button";
import Image from "next/image";
import "@/app/components/navbars/topBar/styles.css";

const TopBar = () => {
	return (
		<div className={`bg-green-600 topBar`}>
			<Image
				src="/redestinea-complete-logo.png"
				alt="Logo"
				width={150}
				height={40}
			/>
			<div className={"navButtons"}>
				<div className={"link"}>
					<h1>Promociones</h1>
				</div>
				<div className={"link"}>
					<h1>Destinos populares</h1>
				</div>
				<div className={"link"}>
					<h1>Contacto</h1>
				</div>
			</div>
			<Button>Buscar</Button>
		</div>
	);
};

export default TopBar;
