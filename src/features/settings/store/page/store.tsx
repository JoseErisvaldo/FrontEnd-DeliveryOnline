import { DialogStore } from '@/features/settings/store/components/dialog-store';
import HeaderSettings from '@/features/settings/profile/components/header-settings';
import UserSettings from '@/features/settings/profile/components/profile-settings';
import Store from '@/features/settings/store/components/store';

export default function SettingsStore() {
  return (
    <div className="flex flex-col gap-6">
      <HeaderSettings />
      <UserSettings />
      <div className="flex justify-end p-3">
        <DialogStore />
      </div>
      <Store />
    </div>
  );
}
