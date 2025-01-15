import LoginForm from "./components/LoginForm";
import LoginGithub from "./components/LoginGithub";
import LoginGoogle from "./components/LoginGoogle";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-slate-600 px-5">
        <div className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
          <LoginForm />
          <LoginGoogle />
          <LoginGithub />
        </div>
      </div>
    </main>
  );
}
