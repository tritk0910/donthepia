import NavBar from "@/components/layout/NavBar";
import Desc1 from "./(component)/Desc1";
import Desc2 from "./(component)/Desc2";
import Desc3 from "./(component)/Desc3";
import Desc4 from "./(component)/Desc4";
import Desc5 from "./(component)/Desc5";
import Desc6 from "./(component)/Desc6";

export default function Home() {
  return (
    <main>
      <NavBar />
      <img src="/img/00-img.png" alt="" className="object-cover size-full" />
      <Desc1 />
      <Desc2 />
      <Desc3 />
      <Desc4 />
      <Desc5 />
      <Desc6 />
    </main>
  );
}
