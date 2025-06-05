export const Footer = () => {
  return (
		<footer>
			<div className="flex flex-col justify-between items-center gap-1 mx-auto p-4 max-w-(--breakpoint-xl) text-sm bg-background text-muted-foreground md:flex-row">
				<span className="text-center text-pretty">Leonardo Luz, Diego Prestes, <br className=" sm:hidden" /> Gustavo Policarpo & Gustavo Martins</span>
				<span>Copyright &copy; 2025</span>
			</div>
		</footer>
  )
}
