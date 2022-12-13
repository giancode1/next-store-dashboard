export default function Footer() {
  return (
    <footer className="text-center mb-5 pt-8">
      <div className="pb-2">&copy; {new Date().getFullYear()} Giancarlo Culcay</div>
      <div className="inline opacity-75">
        <a href="https://www.linkedin.com/in/giancarlo-culcay/" target="_blank" className="font-bold" rel="noreferrer">
          Made with ❤️ by Giancarlo Culcay 🚀
        </a>
      </div>
    </footer>
  );
}
