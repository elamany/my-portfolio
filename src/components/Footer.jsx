export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <span>© {year} Amanuel Tadele — Selected Work</span>
        <span className="status">
          <span className="dot-live" />
          Available for opportunities
        </span>
      </div>
    </footer>
  );
}