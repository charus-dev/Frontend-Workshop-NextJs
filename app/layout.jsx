import './globals.css'; // Add global styles here if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />
        <header style={headerStyle}>
          <h1 style={titleStyle}>Pillai's Workshop 2024</h1>
        </header>
        <main style={mainStyle}>
          {children}
        </main>
        <footer style={footerStyle}>
          <p>&copy; 2024 Charu's App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  color: '#ffffff',
  padding: '20px',
  textAlign: 'center',
};

const titleStyle = {
  margin: '0',
  fontSize: '2rem',
};

const mainStyle = {
  padding: '20px',
};

const footerStyle = {
  backgroundColor: '#282c34',
  color: '#ffffff',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};
