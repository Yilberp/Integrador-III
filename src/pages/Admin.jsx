import { FormNews } from "../components/Admin/FormNews";
import { Header } from "../components/Admin/Header";
import { MenuAdmin } from "../components/Admin/MenuAdmin";

export function Admin() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex relative">
        <MenuAdmin />
        <FormNews />
      </div>
    </div>
  );
}
