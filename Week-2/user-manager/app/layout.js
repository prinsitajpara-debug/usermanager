import './global.css';

export const metadata = {
  title: 'User Manager',
  description: 'Manage users application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
