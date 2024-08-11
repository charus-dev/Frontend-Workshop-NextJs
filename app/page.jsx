import Link from 'next/link';

export default function Home() {
  return (
    <div style={containerStyle}>
    <h1 style={headingStyle}>Welcome to Our Next.js App - Lets Get Goin! 🎉</h1>
    <p style={paragraphStyle}>
      <Link href="/users" style={linkStyle}>View Users 👥</Link>
    </p>
    <p style={paragraphStyle}>
      <Link href="/about" style={linkStyle}>About Us 📖</Link>
    </p>
  </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
};

const linkStyle = {
  color: '#0070f3',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const linkHoverStyle = {
  textDecoration: 'underline',
};
const paragraphStyle = {
  margin: '10px 0',
};
