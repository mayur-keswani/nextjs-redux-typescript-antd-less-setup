import { useRouter } from "next/router";
import  { ComponentType } from "react";
// import OnboardWrapper from "../../components/onboard-wrapper/OnboardWrapper";

export function withAuth<T>(WrappedComponent: ComponentType<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 
  const InnerFunction = (props: any) => {
    const Router = useRouter();

    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("access_token");
      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        // Router.replace("/login");     // Return to login state
        return null;
      }

     // MAKE API REQUEST TO BACKENT TO VARIFY ACCESS TOKEN

        // const component = (status: number) => {
        //    if (status === 200) {
        //       return <WrappedComponent {...props} />;
        //    } else Router.replace("/login");
        // };
    
    // *******     After Receiving api response     ******** // 
          //if (data) return component(data.verifyToken.status);
          //if (loading) return <Splash />;
    }
    // If we are on server, return null
    return null;
  };

  return InnerFunction;
}

export default withAuth;
