import { PostDialogCategory } from "@/components/category/post-dialog-category";
import HeaderMenu from "@/components/header-menu";
import HeaderTitle from "@/components/header-title";
import Layout from "@/components/layout";

export default function MenuCategories() {
  return <Layout>
    <HeaderTitle title="Categorias" />
    <HeaderMenu>
      <PostDialogCategory />
    </HeaderMenu>
  </Layout>;
}
