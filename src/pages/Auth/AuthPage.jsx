import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import PageHero from "@/components/common/PageHero";
import AuthPanel from "@/components/auth/AuthPanel";
import { setAuthView } from "@/features/ui/uiSlice";

const AuthPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthView(location.pathname === "/register" ? "register" : "login"));
  }, [dispatch, location.pathname]);

  return (
    <>
      <PageHero title={location.pathname === "/register" ? "Register" : "Login"} />
      <section className="py-16">
        <div className="app-container">
          <AuthPanel />
        </div>
      </section>
    </>
  );
};

export default AuthPage;
