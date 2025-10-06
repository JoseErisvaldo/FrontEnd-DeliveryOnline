import HeaderMenu from '@/shared/ui/header-menu';
import HeaderTitle from '@/shared/ui/header-title';
import Layout from '@/shared/ui/layout';
import { PostDialogCategory } from '../components/post-dialog-category';

export default function MenuCategories() {
  return (
    <Layout>
      <HeaderTitle title="Categorias" />
      <HeaderMenu>
        <PostDialogCategory />
      </HeaderMenu>
    </Layout>
  );
}
