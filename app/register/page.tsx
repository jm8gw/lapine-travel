import RetreatRegistrationForm from "./RegistrationForm2"; // update path if needed

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Company Retreat Registration
      </h1>
      <RetreatRegistrationForm />
    </main>
  );
}

