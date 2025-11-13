
// export default function Home() {
//   return (
//     <div className="flex min-h-screen  flex-col p-10">
//         <h1 className="text-3xl font-bold mb-4 text-center">Home page</h1>
//         <div className="container flex flex-col gap-2 shadow-md p-6 mt-5">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
//       </div>
//     </div>
//   );
// }
// app/page.tsx  یا app/home/page.tsx
export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/contact", {
    cache: "no-store", // تا همیشه جدیدترین داده بیاید
  });
  const contacts = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>

      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map((item: any) => (
            <li key={item.id} className="border p-3 rounded">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Message:</strong> {item.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
