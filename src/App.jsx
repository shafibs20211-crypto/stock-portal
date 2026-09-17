import { Show, SignIn, UserButton } from "@clerk/react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <Show when="signed-out">
        <SignIn
          fallbackRedirectUrl="/dashboard"
          forceRedirectUrl="/dashboard"
        />
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>

    </div>
  );
}

export default App;