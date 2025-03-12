export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>
				<div className="bg-[#85DE7E] p-4">
					<h1 className="text-white">Barra Superior</h1>
				</div>
				{children}
			</body>
		</html>
	);
}
