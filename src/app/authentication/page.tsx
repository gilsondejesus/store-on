import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sing-up-form";
import { Header } from "@/components/common/header";

export default function Authentication() {
  return (
    <>
      <Header />
      <div className="flex w-full max-w-sm flex-col gap-6 p-5">
        <Tabs defaultValue="sing-in">
          <TabsList>
            <TabsTrigger value="sing-in">Entrar</TabsTrigger>
            <TabsTrigger value="sing-up">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="sing-in">
            <SignInForm />
          </TabsContent>
          <TabsContent className="w-full" value="sing-up">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
