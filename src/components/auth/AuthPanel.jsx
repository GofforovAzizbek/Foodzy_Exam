import { useMemo } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthView } from "@/features/ui/uiSlice";

const AuthPanel = () => {
  const dispatch = useDispatch();
  const authView = useSelector((state) => state.ui.authView);
  const isLogin = useMemo(() => authView === "login", [authView]);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid overflow-hidden rounded-[36px] border border-slate-100 bg-white shadow-card lg:grid-cols-[0.9fr,1fr]">
        <div className="relative overflow-hidden bg-[linear-gradient(160deg,#1f2429,#2f3740,#f97316)] px-8 py-14 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%)]" />
          <div className="relative space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
              Foodzy Account
            </p>
            <h2 className="text-5xl font-black leading-tight">
              {isLogin ? "Welcome back to your fresh cart." : "Create your food shopping profile."}
            </h2>
            <p className="max-w-md text-white/75">
              This auth screen keeps the same bright red, dark charcoal, and rounded card language as
              the provided marketplace designs.
            </p>
          </div>
        </div>
        <div className="p-8 sm:p-12">
          <div className="mb-8 flex rounded-2xl bg-slate-100 p-1">
            {[
              ["login", "Login"],
              ["register", "Register"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => dispatch(setAuthView(value))}
                className={`flex-1 rounded-2xl px-5 py-3 text-sm font-bold transition ${
                  authView === value ? "bg-white text-slate-900 shadow-soft" : "text-slate-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <form className="grid gap-5">
            {!isLogin ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstNameAuth" value="First Name" />
                  <TextInput id="firstNameAuth" className="mt-2" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastNameAuth" value="Last Name" />
                  <TextInput id="lastNameAuth" className="mt-2" placeholder="Doe" />
                </div>
              </div>
            ) : null}
            <div>
              <Label htmlFor="emailAuth" value="Email Address" />
              <TextInput id="emailAuth" className="mt-2" placeholder="name@example.com" />
            </div>
            <div>
              <Label htmlFor="passwordAuth" value="Password" />
              <TextInput id="passwordAuth" type="password" className="mt-2" placeholder="Enter password" />
            </div>
            {!isLogin ? (
              <div>
                <Label htmlFor="confirmPasswordAuth" value="Confirm Password" />
                <TextInput
                  id="confirmPasswordAuth"
                  type="password"
                  className="mt-2"
                  placeholder="Confirm password"
                />
              </div>
            ) : null}
            <Button color="failure" className="mt-2 !bg-brand-primary py-3 hover:!bg-brand-primary-dark">
              {isLogin ? "Login" : "Create Account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPanel;
