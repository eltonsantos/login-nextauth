import LoginForm from "./components/LoginForm";

export default function Home() {
  console.log("oi home")
  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-slate-600 px-5">
        <LoginForm />
      </div>
    </main>
  );
}
